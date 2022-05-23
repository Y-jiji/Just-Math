---
TimeLine: 
=> 20220513--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |


# § pi集和lambda集

## pi集的定义 [DEF]

\<形式定义\>

$$
\pialg(X) := \Field{(\and)}{\;\;}{
    & X\text{<set>} \\
    & \forall A,B \in X: A \cap B \in X
}
$$


## lambda集的定义 [DEF]

\<形式定义\>

$$
\lambdaalg(X) := \Field{(\and)}{\;\;}{
    & X\text{<set>}\\
    & \exist \Omega \in X: X \sube \Pow(\Omega)\\
    & \forall A, B\in X: A \sube B \Rightarrow B \diagdown A \in X\\
    & \forall A: [1 .. ] \to X: \bigcup_{n \in [1 .. ]} A \in X 
}
$$