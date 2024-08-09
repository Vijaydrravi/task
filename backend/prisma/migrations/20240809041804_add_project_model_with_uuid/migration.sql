-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tasks" JSONB NOT NULL,
    "userIds" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
