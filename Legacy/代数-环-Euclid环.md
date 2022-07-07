---
TimeLine: 
=> 20220510--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# Euclid环

## Euclid环的定义

\<文字定义\>

Euclid环是带 $\deg$ 函数的环. 典型的Euclid环如环上的多项式环

\<形式定义\>

$$
\text{euclid-ring}(R) := \Block{(\and)}{\;\;}{
    & \text{entire-ring}(R)\\
    & R[\deg] : R[\S] \diagdown \{R[0]\} \to \N[\S]\\
    & \forall a, b\in R[\S]: \exist q,r\in R[\S]:\Block{(\or)}{\;\;}{
        & \bigg(b = a \cdot q + r \bigg)\and \bigg(\underset{@ R}\deg r \overset{@ \N}< \underset{@ R}\deg a\bigg)\\
        & \bigg(b = a \cdot q + r \bigg)\and \bigg(r = R[0]\bigg)\\
    }
}
$$

