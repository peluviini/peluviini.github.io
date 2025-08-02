
use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use actix_cors::Cors;
use actix_files::Files;


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive())
            .service(Files::new("/", "page/").index_file("index.html"))
    })
    .bind(("127.0.0.1", 7080))?
    .run()
    .await
}