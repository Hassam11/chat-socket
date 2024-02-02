import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, password } = req.body;

      const newUser = await prisma.user.create({
        data: {
          name,
          password,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const user = await prisma.user.findMany();
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, password } = req.body;

      const updatedUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          password,
        },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  }
  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteUser = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(202).json(deleteUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    } finally {
      await prisma.$disconnect();
    }
  }
}
export default UserController;
