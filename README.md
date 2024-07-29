# For server:

docker run -d --name server --network assignment3 -p 3000:3000 -v "$(pwd)/server:/home/assign3user/app" -v server-data:/home/assign3user/app/data node-server:1

# For client:

winpty docker run -it --name client --network assignment3 -v "$(pwd)/client:/home/assign3user/app" node-client:1



