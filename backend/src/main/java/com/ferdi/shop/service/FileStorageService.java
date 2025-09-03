package com.ferdi.shop.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private final String uploadDir = System.getProperty("user.dir") + "/uploads";

    public String saveFile(MultipartFile file) throws IOException {
        Files.createDirectories(Paths.get(uploadDir));
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir, fileName);
        file.transferTo(filePath.toFile());
        return "/uploads/" + fileName;
    }
}