ifndef u
u:=sotatek
endif

deploy:
	rsync -avhzL --delete \
				--no-perms --no-owner --no-group \
				--exclude .idea \
				--exclude .git \
				--exclude .next \
				--exclude node_modules \
				--exclude .husky \
				--exclude .env \
				--exclude .env.local \
				--exclude .env.docker \
				--exclude .env.rinkerby \
				--exclude .env.ropsten \
				--exclude .env.staging \
				. $(u)@$(h):$(dir)
	ssh $(u)@$(h) "cd $(dir); cp .env.example .env"
	ssh $(u)@$(h) "cd $(dir); yarn build"
	ssh $(u)@$(h) "pm2 restart moon-staking-fe"

deploy-dev: 
	make deploy h=172.16.1.223 dir=/home/sotatek/mooncoin/moon-staking-fe


#deploy-production:
#	rsync -avhzL --delete \
#				--no-perms --no-owner --no-group \
#				--exclude .git \
#				--exclude .env \
#				--exclude dist \
#				--exclude node_modules \
#				--filter=":- .gitignore" \
#				. ubuntu@ec2-3-1-7-62.ap-southeast-1.compute.amazonaws.com:/home/ubuntu/loyalty-platform/backend/workers
