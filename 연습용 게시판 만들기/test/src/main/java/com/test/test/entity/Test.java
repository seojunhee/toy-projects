package com.test.test.entity;

//import javax.persistence.*;
import jakarta.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "test_board")
@Entity
public class Test {

    @Id
    private int idx;

    @Column(length = 400, name = "userId")
    private String userId;
    @Column(length = 400, name = "userName")
    private String userName;

    @Column(length = 400, name = "userPW")
    private String userPW;
}