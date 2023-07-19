import { bold, brightRed, green, yellow } from "colors";
import DB from "./db.js";

const tableName = "video_game"

export default class VideoGamesModel {
  constructor() {
    const connection = new DB();

    this.db = connection.connect();
    this.close = connection.closeCon();
  }

  async readVideoGames() {
    try {
      let rows = await this.db.select(tableName);

      if (!rows.length) {
        console.log("No se encontró la tabla " + yellow(tableName) + ". Agregando datos de prueba...");

        const created = await this.db.create("video_game", {
          name: "dead island",
          launch_date: "31-05-2016",
          price: 40000,
          creator: "Techland",
          supported_languages: ["español de España", "inglés", "francés", "italiano", "alemán", "checo", "polaco", "ruso"],
          genres: ["zombis", "multijugador", "cooperativos", "acción"]
        })

        if (created) console.log(green("Datos de prueba agregados..."))

        rows = await this.db.select(tableName)
      }

      return rows
    }

    catch (error) {
      console.log(brightRed(bold(`Error al leer datos: [ ${error} ]`)))
    }

    finally {
      this.close();
    }
  }

  async createVideoGame(params) {
    try {
      return await this.db.create(tableName, params);
    }

    catch (error) {
      console.log(brightRed(bold(`Error al crear datos: [ ${error} ]`)))
    }

    finally {
      this.close();
    }
  }

  async updateVideoGame({ id, ...data }) {
    try {
      return await this.db.update(id, data)
    }

    catch (error) {
      console.log(brightRed(bold(`Error al actualizar datos: [ ${error} ]`)))
    }

    finally {
      this.close();
    }
  }

  async deleteVideoGame(id) {
    try {
      return await this.db.delete(id)
    }

    catch (error) {
      console.log(brightRed(bold(`Error al eliminar datos: [ ${error} ]`)))
    }

    finally {
      this.close();
    }
  }
}
