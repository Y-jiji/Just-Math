---
TimeLine: 
=> 20220701--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 | #SYMBOL-V4 | 
| ------------ | ------------ | ---------- |

# § 元组和Cartesian积

## 元组 [DEF]

\<文字\>

元组即有序对. 

\<形式\>

$$
\begin{matrix}
\begin{aligned}
\text{\$Tuple} :((\param x, \param y)) := \{\param x, \{\param x, \param y\}\}\\
\end{aligned}\\
\begin{aligned}
    ::: \text{\$Token}:\param x\\
    ::: \text{\$Token}:\param y\\
\end{aligned}
\end{matrix}
$$

## Cartesian积 [DEF]

\<文字\>

\<形式\>

$$
\begin{matrix}
\begin{aligned}
\text{\$CartesianProd} : \param X\times \param Y := 
    \left\{a: \Block{\exist x:\exist y:(\and)}{\;\;}{
        & a=((x, y))\\
        & x \in \param X\\
        & y \in \param Y\\
    }\right\}\\
\end{aligned}\\
\begin{aligned}
    ::: \text{\$Token}:\param X\\
    ::: \text{\$Token}:\param Y\\
\end{aligned}
\end{matrix}
$$

