
cd frontend

cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --target web --out-dir ../backend/page ./target/wasm32-unknown-unknown/release/frontend.wasm

cd ..

cp -rf frontend/assets/* backend/page/assets/
