import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    try{
        if(!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: "All fields are required" });
        }
        await prisma.school.create({
            data: {
                name,
                address,
                latitude,
                longitude
            }
        });
        res.status(201).json({ message: "School created successfully" });
    }catch (error) {
        console.error("Error creating school:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllSchools = async (req, res) => {
    try {
        const schools = await prisma.school.findMany();
        res.status(200).json(schools);
    } catch (error) {
        console.error("Error fetching schools:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
