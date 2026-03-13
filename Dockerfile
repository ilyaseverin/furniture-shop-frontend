FROM node:20-alpine AS base

# --- Dependencies ---
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env vars (NEXT_PUBLIC_* are inlined at build time)
ARG NEXT_PUBLIC_CATALOG_API_BASE_URL
ARG NEXT_PUBLIC_IMAGE_API_BASE_URL
ARG NEXT_PUBLIC_COLLECTION_HERO_ID=1
ARG NEXT_PUBLIC_COLLECTION_PICKS_ID=2
ARG NEXT_PUBLIC_COLLECTION_INSTAGRAM_ID=3
ARG NEXT_PUBLIC_COLLECTION_CAROUSEL_ID=4

RUN npm run build

# --- Runner ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
