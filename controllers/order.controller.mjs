import { mapOrder, mapOrderFormDetailList, mapOrderList } from "../mapping/orders.mapper.mjs";
import { mapSlugServices } from "../mapping/servicesMapper.mjs";
import Order from "../models/order.model.mjs";
import { postWithoutToken } from "../utils/fetchAPI.mjs";

const getOrderList = async (req, res) => {
    console.log("=> Start get order list process.".yellow);
    try {
        const { userId } = req.query

        console.log(`- Get order list by userId into order collection`.yellow);
        const ordersList = await Order.find({ userId })

        if (ordersList.length == 0) {
            console.error("- Order not found!".underline.red);
            return res.status(404).json({ message: "Order not found!", isSuccessful: false });
        }

        console.log(`- Mapped orders list`.yellow);
        const mappedOrderList = mapOrderList(ordersList)

        console.log("- Get order list successfully!".underline.green);
        return res.status(200).json({ data: mappedOrderList, isSuccessful: true });
    } catch (error) {
        console.error("- Error get list:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

const updateOrderStatus = async (req, res) => {
    console.log("=> Start order update process.".yellow);
    try {
        const { userId } = req.query

        console.log(`- Get order list by userId into order collection`.yellow);
        const ordersList = await Order.find({
            userId,
            paymentStatus: { $in: ['Processing', 'In-Progress', 'Partial'] }
        })

        if (ordersList.length == 0) {
            console.error("- Order not found!".underline.red);
            return res.status(404).json({ message: "Order not found!", isSuccessful: false });
        }

        console.log(`- Find latest payment status and update to DB collection.`.yellow);
        const promises = await Promise.all(ordersList.map(async (order) => {
            let response = await postWithoutToken('https://instant-likes.com/api/v2', {
                "key": process.env.KEY,
                "action": "status",
                "order": order.orderId
            })

            let updatedOrder = await Order.findOneAndUpdate({
                userId,
                orderId: order.orderId
            }, { paymentStatus: response.status }, { new: true })

            return updatedOrder
        }))

        console.log(`- Mapped orders list`.yellow);
        const mappedOrderList = mapOrderList(promises)

        console.log("- Update order status successfully!".underline.green);
        return res.status(200).json({ data: mappedOrderList, isSuccessful: true });
    } catch (error) {
        console.error("- Error get list:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

const orderFormDetail = async (req, res) => {
    console.log("=> Start get order form detail process.".yellow);
    try {
        const { slug } = req.body

        console.log(`- Data mapping to transform the service formate.`.yellow);
        const mappedServices = mapSlugServices(slug);

        if (!mappedServices) {
            console.error("- Service not found!");
            return res.status(404).json({ message: "Service not found!", isSuccessful: false });
        }

        console.log(`- Data mapping to transform the order form details formate.`.yellow);
        const mappedOrder = mapOrderFormDetailList(req.body, mappedServices);

        console.log("- Get order form details successfully!".underline.green);
        return res.status(200).json({ data: mappedOrder, isSuccessful: true });
    } catch (error) {
        console.error("- Error get order form details:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

const generateOrder = async (req, res) => {
    console.log("=> Start generate order process.".yellow);
    try {
        const { qty, slug, serviceId, name, email } = req.body
        const { userId } = req.query

        console.log(`- Create order with another API.`.yellow);
        let response = { "order": 4599708 }
        // let response = await postWithoutToken('https://instant-likes.com/api/v2', {
        //     "key": process.env.KEY,
        //     "action": "add",
        //     "service": serviceId,
        //     "link": "https://www.instagram.com/revoltino.official/",
        //     "qty": qty
        // })

        console.log(`- Data mapping to transform the service formate.`.yellow);
        const mappedServices = mapSlugServices(slug);

        console.log(`- Data mapping to transform the order for generate order.`.yellow);
        const mappedOrder = mapOrder(mappedServices, response, req.body);

        if (!mappedOrder) {
            console.error("- Service not found!");
            return res.status(404).json({ message: "Service not found!", isSuccessful: false });
        }

        console.log("- Create new order to order modal.".yellow);
        const newOrder = new Order({ ...mappedOrder, userId: userId, name: name, email: email });

        console.log("- Store data in db collection.".yellow);
        await newOrder.save()

        console.log("- Your order successfully generated!".underline.green);
        return res.status(200).json({ orderId: mappedOrder.orderId, message: "Your order successfully generated!", isSuccessful: true });
    } catch (error) {
        console.error("- Error generate order:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

export default {
    getOrderList,
    orderFormDetail,
    generateOrder,
    updateOrderStatus
}
