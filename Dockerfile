# Etapa de Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa de Producción
FROM node:18-alpine

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

RUN chown -R nextjs:nodejs ./.next
USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "localhost"

CMD ["node", ".next/standalone/server.js"]
