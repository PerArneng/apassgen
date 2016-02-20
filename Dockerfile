FROM alpine:3.3
COPY apassgen.py /tmp/
RUN apk add --update python3 && rm -rf /var/cache/apk/*
CMD [ "python3.5", "/tmp/apassgen.py" ]