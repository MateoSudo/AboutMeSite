FROM docker.io/oven/bun:debian

# Config Bun
ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Update packages
RUN if [ "debian" == "alpine" ] ; then apk update ; else apt-get update ; fi

# Install Git and sudo
RUN if [ "debian" == "alpine" ] ; then apk add git sudo ; else apt-get install -y git sudo ; fi

