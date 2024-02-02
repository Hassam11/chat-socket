import { Request, Response } from "express";

class AuthController {
  static login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if (username === "usuario" && password === "contraseña") {
        res.status(200).json({ message: "Inicio de sesión exitoso" });
      } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  static logout(req: Request, res: Response) {
    try {
      res.status(200).json({ message: "Logout exitoso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}

export default AuthController;
