FROM node:20-alpine AS main-build
WORKDIR /app
COPY ../frontend-ooo/package*.json ./
RUN npm install
COPY ../frontend-ooo .
RUN npm run build


FROM eclipse-temurin:21-jdk AS backend-build
WORKDIR /app
COPY . .

COPY --from=main-build /app/dist ./src/main/resources/static

#COPY ../frontend-potolki/public/3d ./src/main/resources/static/3d

RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=backend-build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
