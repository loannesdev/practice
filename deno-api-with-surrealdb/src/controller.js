import VideoGamesModel from "./model.js";

export const getVideoGames = async ({ response }) => {
  response.body = await new VideoGamesModel().readVideoGames();
}

export const postVideoGame = async ({ request, response }) => {
  const body = await request.body().value

  if (!body) {
    response.status = 400
    response.body = { message: "Te hacen falta datos" }
    return
  }

  const res = await new VideoGamesModel().createVideoGame(body)

  response.status = 200
  response.body = { message: "Datos almacenados =)", data: res }
}

export const putVideoGames = async ({ request, response }) => {
  const body = await request.body().value

  if (!body) {
    response.status = 400
    response.body = { message: "Te hacen falta datos" }
    return
  }

  const res = await new VideoGamesModel().updateVideoGame(body)

  response.status = 200
  response.body = { message: "Datos actualizados =)", data: res }
}


export const deleteVideoGame = async ({ response, params }) => {
  if (!params.id) {
    response.status = 400
    response.body = { message: "Te hacen la referencia del video juego" }
    return
  }

  const res = await new VideoGamesModel().deleteVideoGame(params.id)

  response.status = 200
  response.body = { message: "Datos eliminados", data: res }
}

