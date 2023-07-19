import { bold, brightBlue, brightRed, italic, white } from "colors";
import Surreal from "surrealdb";

class DB {
  constructor() {
    try {
      this.con = new Surreal("http://localhost:8000/rpc", { auth: { user: "root", pass: "root" }, db: "games_db", ns: "test" })
      console.log(brightBlue(italic(bold("Conexión establecida"))))
    }

    catch (e) {
      console.log(brightRed(italic(bold(`Error al conectarse a la bd: [ ${e} ]`))))
    }
  }

  connect() {
    return this.con
  }

  closeCon() {
    return () => {
      this.con.close()
      console.log(white(italic(bold("Conexión cerrada"))))
    }
  }
}

export default DB;