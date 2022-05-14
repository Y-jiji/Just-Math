---
TimeLine: 
=> 20220513--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 抽象测度上的Lesbegue积分

## 支集的定义

$$

$$

## 实值函数的绝对值



## Lesbegue积分的定义

\<形式定义:全域积分\>

$$
\begin{matrix}
\begin{aligned}
\lesint f \dif\mu
\left[\;\begin{aligned}
    & := \sum_{c\in \img f} c \cdot \mu (\hat f^{\diamond -}(\{c\}))
        && ::: \card \img f \prec \aleph(\varnothing)\\
    & := \sup_{@ \R} \left\{ 
        \lesint \phi  \dif \mu:
        \Field{(\and)}{\;\;}{
            & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
            & \phi \le f\\
            & \card \img \phi \prec \aleph(\varnothing)\\
        }
    \right\}
        && ::: \exist M\in ((0, \infin)): |f|,\mu(\supp f) < M\\
    & := \sup_{@ \R} \left\{ 
        \lesint \phi  \dif \mu:
        \Field{(\and)}{\;\;}{
            & \phi: \text{MsrSpace}(\mu) \MeasurableTo \R\\
            & 0 \le \phi \le f\\
            & \exist M\in ((0, \infin)): \phi,\mu(\supp \phi) < M
        }
    \right\}
        && :::  f \ge 0\\
    & := \lesint \frac{|f| + f}{2} \dif \mu - \lesint \frac{|f| - f}{2} \dif \mu
        && ::: \lesint |f|\, \dif \mu < \infin\\
\end{aligned}\right.
\end{aligned}
\\
\begin{aligned}
    & :::f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
\end{aligned}
\end{matrix}
$$

\<形式定义:给定集合\>

$$
\begin{matrix}
\begin{aligned}
\lesint_E f \dif\mu := \lesint \Ind_{\in E} \cdot f \dif \mu
\end{aligned}\\
\begin{aligned}
    & ::: f: \text{MsrSpace}(\mu) \MeasurableTo \R\\ 
    & ::: E \in \dom\mu
\end{aligned}
\end{matrix}
$$

