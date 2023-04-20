#!/bin/bash

LANGUAGE="$1"
if [ -z "$LANGUAGE" ]; then
  echo "You must pass the target language as the first argument to the script"
  exit 1
fi

cat "$LANGUAGE.prisma" "models.prisma" > schema.prisma