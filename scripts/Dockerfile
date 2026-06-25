FROM nginx

WORKDIR /usr/share/nginx/html

RUN apt-get update
RUN apt-get install -y git
RUN rm *
RUN git clone https://github.com/Allan1207/exodocker.git .
RUN cp -r scripts/* . && rm -rf scripts