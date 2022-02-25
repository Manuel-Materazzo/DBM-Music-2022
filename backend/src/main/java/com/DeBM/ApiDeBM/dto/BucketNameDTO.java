package com.DeBM.ApiDeBM.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum BucketNameDTO {
    IMAGE("un saluto per i bot");
    private final String bucketName;
}
