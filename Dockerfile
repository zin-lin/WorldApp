FROM openjdk:latest
EXPOSE 8080
ADD target/DockerApp.jar DockerApp.jar
ENTRYPOINT ["java", "-jar", "DockerApp.jar"]
