package com.DeBM.ApiDeBM.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Builder
@AllArgsConstructor
public class Featuring {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFeaturing;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date inizio;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date scadenza;


    //------------- RELAZIONI ------------------- 1-N Featuring-Artisti
    //uso l'entitygraph per recuperare quando necessario
    @ManyToOne(targetEntity = Artisti.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "Artisti")
    @JsonBackReference
    private Artisti artista;
}
