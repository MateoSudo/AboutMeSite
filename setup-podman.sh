#!/bin/bash

# Setup script for Podman with VS Code Dev Containers

echo "Setting up Podman for VS Code Dev Containers..."

# Check if podman is installed
if ! command -v podman &> /dev/null; then
    echo "Podman is not installed. Please install podman first."
    echo "On Ubuntu/Debian: sudo apt install podman"
    echo "On Fedora: sudo dnf install podman"
    echo "On Arch: sudo pacman -S podman"
    exit 1
fi

# Check if podman-compose is installed
if ! command -v podman-compose &> /dev/null; then
    echo "podman-compose is not installed. Installing..."
    pip3 install podman-compose
fi

# Enable and start podman socket
echo "Enabling podman socket..."
systemctl --user enable podman.socket
systemctl --user start podman.socket

# Check if socket is running
if systemctl --user is-active --quiet podman.socket; then
    echo "✅ Podman socket is running"
else
    echo "❌ Failed to start podman socket"
    exit 1
fi

# Test podman
echo "Testing podman..."
podman --version

echo "✅ Podman setup complete!"
echo "You can now use VS Code Dev Containers with Podman."
echo ""
echo "Note: Make sure to restart VS Code after running this script."
