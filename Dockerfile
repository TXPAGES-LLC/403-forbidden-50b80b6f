FROM node:20-bullseye AS builder
WORKDIR /app
COPY package*.json ./
RUN rm -f package-lock.json && npm install --include=optional --legacy-peer-deps --no-audit --no-fund
COPY . .
RUN mkdir -p public
RUN node -e "const fs=require('fs');const files=['postcss.config.mjs','postcss.config.js','postcss.config.cjs','postcss.config.ts'];const cfg=files.reduce((a,f)=>{try{return a+fs.readFileSync(f,'utf8')}catch{return a}},'');if(!cfg.includes('@tailwindcss/postcss')){console.error('\n[BUILD BLOCKED] postcss.config must use @tailwindcss/postcss.');console.error('Without it, Tailwind v4 will not expand @tailwind utilities or @apply rules,');console.error('producing a site that loads but has no CSS utility classes applied.\n');process.exit(1);}"
RUN node -e "try{require('@tailwindcss/postcss')}catch{console.error('\n[BUILD BLOCKED] @tailwindcss/postcss is not installed.');console.error('Add it to package.json dependencies and redeploy.\n');process.exit(1);}"
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]