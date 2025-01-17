export const mapOrder = (services, response, body) => {
    let getSelectedPlan = services.plans?.filter((plan) => plan.type === body.type).at(0)?.list || []
    let getSelectedOption = getSelectedPlan?.filter((list) => list.qty == body.qty).at(0)

    if (!getSelectedOption) return {}

    return {
        qty: getSelectedOption.qty,
        discount: getSelectedOption.discount,
        amount: getSelectedOption.price,
        serviceId: services.serviceId,
        orderId: response.order,
        serviceName: services.name,
        serviceType: body.type,
    };
};

export const mapOrderList = (orders) => {
    return orders.map((order) => {
        return {
            qty: order.qty,
            discount: order.discount,
            amount: order.amount,
            serviceId: order.serviceId,
            serviceName: order.serviceName,
            serviceType: order.serviceType,
            paymentStatus: order.paymentStatus
        }
    });
};

export const mapOrderFormDetailList = (body, services) => {
    let getSelectedPlan = services.plans?.filter((plan) => plan.type === body.type).at(0)?.list || []
    let getSelectedOption = getSelectedPlan?.filter((list) => list.qty == body.qty).at(0)
    let firstFieldTitle = ""
    let firstFieldPlaceholder = ""

    switch (services.categoryTitle) {
        case 'Instagram Services':
            firstFieldTitle = "Instagram Username"
            firstFieldPlaceholder = "Instagram Username"
            break;
        case 'TikTok Services':
            firstFieldTitle = "TikTok Username"
            firstFieldPlaceholder = "TikTok Username"
            break;
        case 'Youtube Services':
            firstFieldTitle = "Youtube Video URL"
            firstFieldPlaceholder = "Place your Youtube Video URL"
            break;
        case 'Facebook Services':
            firstFieldTitle = "Facebook Post URL"
            firstFieldPlaceholder = "Place your Facebook Post URL"
            break;
        default:
            firstFieldTitle = ''
            firstFieldPlaceholder = ''
            break;
    }

    if (!getSelectedOption) return {}

    return {
        serviceId: services.serviceId,
        name: services.name,
        fields: [
            { title: firstFieldTitle, placeholder: firstFieldPlaceholder, icon: "", price: "", type: "text" },
            { title: "Email", placeholder: "Your Email Address", icon: "", price: "", type: "text" },
            { title: "Package", placeholder: `${getSelectedOption?.qty || ''} ${services.name.replace('Buy ', '')}`, icon: "", type: "select", List: getSelectedPlan, selected: getSelectedOption?.length > 0 ? getSelectedOption : getSelectedPlan[0] },
        ]
    };
};