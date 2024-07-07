-- AlterTable
ALTER TABLE `user` MODIFY `role` VARCHAR(191) NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE `MessageGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userOne` INTEGER NULL,
    `userTwo` INTEGER NULL,
    `userThree` INTEGER NULL,
    `userFour` INTEGER NULL,
    `userFive` INTEGER NULL,
    `date_created` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` VARCHAR(191) NOT NULL,
    `fromUserID` INTEGER NOT NULL,
    `toMessageGroupID` INTEGER NOT NULL,
    `date_created` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
