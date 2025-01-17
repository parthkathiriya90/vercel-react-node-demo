import { mapServices, mapSlugServices } from "../mapping/servicesMapper.mjs";

const servicesData = async (req, res) => {
    console.log("=> Start get services process.".yellow);
    try {

        console.log(`- Find services in collection`.yellow);

        console.log(`- Data mapping to transform the service formate.`.yellow);
        const mappedProfile = mapServices();

        if (mappedProfile.length === 0) {
            console.error("- Services not found!");
            return res.status(404).json({ message: "Services not found!", isSuccessful: false });
        }

        console.log("- Get services successfully!".underline.green);
        return res.status(200).json({ data: mappedProfile, isSuccessful: true });
    } catch (error) {
        console.error("- Error get services:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

const servicesBySlug = async (req, res) => {
    console.log("=> Start get services process.".yellow);
    try {
        const { slug } = req.params

        console.log(`- Find services in collection`.yellow);

        console.log(`- Data mapping to transform the service formate.`.yellow);
        const mappedServices = mapSlugServices(slug);

        if (!mappedServices) {
            console.error("- Services not found!");
            return res.status(404).json({ message: "Services not found!", isSuccessful: false });
        }

        console.log("- Get services successfully!".underline.green);
        return res.status(200).json({ data: mappedServices, isSuccessful: true });
    } catch (error) {
        console.error("- Error get by slug services:".underline.red, error);
        return res.status(500).json({ message: "Internal Server Error", isSuccessful: false });
    }
};

export default {
    servicesData,
    servicesBySlug
};
