# 🪐 Orbit Help Desk - Full Stack SaaS

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Bcrypt](https://img.shields.io/badge/bcrypt-%234A4A4A.svg?style=for-the-badge&logo=npm&logoColor=white)

> Um sistema de Help Desk (Gestão de Chamados) completo, seguro e com interface moderna, construído com as melhores práticas de Engenharia de Software.

## 📋 Visão Geral

O **Orbit Help Desk** é uma solução Full Stack desenvolvida para otimizar o suporte técnico de empresas. O projeto é dividido em dois motores principais que se comunicam via API RESTful:

1. **Backend (API):** Construído com NestJS, focado em segurança, validação de dados, criptografia e controle de permissões (RBAC).
2. **Frontend (Web):** Construído com React e Tailwind, focado em produtividade, com uma interface "Master-Detail" inspirada em clientes de e-mail de alta performance.

## 🏗️ Arquitetura do Projeto

Este repositório contém ambas as aplicações. A estrutura de pastas está organizada da seguinte forma:

```text
orbit-help-desk/
├── 📁 orbit-api/       # Motor Backend (NestJS, Prisma, JWT, Bcrypt)
├── 📁 orbit-web/       # Interface Frontend (React, Vite, Tailwind)
└── 📄 README.md        # Documentação principal
