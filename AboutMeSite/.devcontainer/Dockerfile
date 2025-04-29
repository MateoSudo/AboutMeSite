FROM debian:bullseye-slim

# Install basic development tools
RUN apt update && apt install -y curl unzip git sudo less man-db

# Create a non-root user
ARG USERNAME=matthew
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Install Bun
USER $USERNAME
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/home/$USERNAME/.bun/bin:${PATH}"

# Install global packages
RUN echo 'source ~/.bashrc' >> ~/.profile && \
    . ~/.bashrc && \
    bun install -g typescript ts-node turbo

WORKDIR /workspaces/app

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER $USERNAME
