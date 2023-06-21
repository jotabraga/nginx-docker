FROM nginx:latest

RUN apt-get update && apt-get install -y wget

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]