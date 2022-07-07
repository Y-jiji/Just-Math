---
TimeLine: 
=> 20220614--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# § Kantorovich问题
## Kantorovich问题的定义 [DEF]

\<形式定义\>

$$
\begin{matrix}
\text{kanto-min}(c, \mu, \nu)(\gamma) := 
\Block{(\and)}{\;\;}{
    & {\cal X} := \bigcup_{X \in \dom \mu} X\\
    & {\cal Y} := \bigcup_{Y \in \dom \nu} Y\\\\
    & {\cal P} := \left\{\zeta: \Block{(\and)}{\;\;}{
        & \zeta: \dom \mu \times \dom\nu \to [[0, \infin))\\
        & \zeta(A\times {\cal X}) = \mu(A)\\ 
        & \zeta(B \times {\cal Y}) = \nu(B)
    }\right\}\\\\
    & c: {\cal X} \times {\cal Y} \to [[0, \infin))\\
    & \forall O \in \R[\tau]: c^{\leftarrow}(O) \in \dom \mu \times \dom \nu\\\\
    & \gamma \in {\cal P}\\
    & \lebint c \dif \gamma = \inf_{@ \R}\left\{\lebint c \dif \zeta : \zeta \in {\cal P} \right\}
}\\
::: \mu,\nu\suffix\msr
\end{matrix}
$$

## 对偶等价 [THM]

\<形式描述\>

$$
\forall \mu,\nu\suffix\msr:\forall \gamma:
\Block{(\LRarrow)}{\;\;}{
    & {\cal X} := \bigcup_{X \in \dom \mu} X\\
    & {\cal Y} := \bigcup_{Y \in \dom \nu} Y\\\\
    & \text{kanto-min}(c, \mu, \nu)(\gamma)\\
    & \lebint c \dif \gamma = \sup_{@ \R}\left\{
        \lebint f\dif\mu + \lebint g\dif\nu : 
        \Block{(\and)}{\;\;}{
            & f: {\cal X} \to \R[\S]\\
            & g: {\cal Y} \to \R[\S]\\
            & |f|,|g|<\infin\\
            & \forall O \in \R[\tau]: f^\leftarrow (O)\in \dom \mu\\
            & \forall O \in \R[\tau]: g^\leftarrow (O)\in \dom \nu\\
            & f(x)+g(y) \le c(x,y)
        }
    \right\}
}
$$

\<形式证明\>

