#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

ENV=$1

if [ -z "$ENV" ]; then
ENV="development"
fi

echo "Building environment: $ENV"

# Ejecutar scripts previos necesarios
echo "Ejecutando scripts previos..."
npm run prebuild-components
npm run prebuild

# Construir la aplicación login/shell
echo "Construyendo la aplicación login-shell en modo $ENV..."
ng build --configuration=$ENV

echo "Construcción completada exitosamente."