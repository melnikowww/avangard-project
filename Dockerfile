# =========================================================
# 1️⃣ Сборка фронта для админки
# =========================================================
FROM node:20-alpine AS ceiling-build
WORKDIR /app
COPY ../frontend-potolki/package*.json ./
RUN npm install
COPY ../frontend-potolki .
RUN npm run build

# =========================================================
# 2️⃣ Сборка фронта для клиента
# =========================================================
FROM node:20-alpine AS main-build
WORKDIR /app
COPY ../frontend-ooo/package*.json ./
RUN npm install
COPY ../frontend-ooo .
RUN npm run build

# =========================================================
# 3️⃣ Сборка Spring Boot backend
# =========================================================
FROM eclipse-temurin:21-jdk AS backend-build
WORKDIR /app
COPY . .

# Копируем собранные фронты в static ресурсы
COPY --from=ceiling-build /app/dist ./src/main/resources/static/potolki
COPY --from=main-build /app/dist ./src/main/resources/static

COPY ../frontend-potolki/public/3d ./src/main/resources/static/3d

RUN chmod +x mvnw

# Собираем Spring Boot jar
RUN ./mvnw clean package -DskipTests

# =========================================================
# 4️⃣ Финальный образ
# =========================================================
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=backend-build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
