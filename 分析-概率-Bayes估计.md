---
TimeLine: 
=> 20220531--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# Bayes估计

## Bayes估计的定义 [DEF]

\<形式定义\>

$$
\begin{matrix}
{\rm BayEstim}(p_{X|Y},x,\pi)::\Prop{(\and)}{\;\;}{
    & {\rm BayEstim}(p_{X|Y},x,\pi):\dom \pi \to [[0, \infin))\\
    & {\rm BayEstim}(p_{X|Y},x,\pi)(y)=\frac{
        p_{X\mid Y}(x, y) \cdot \pi(y)
    }{
        \begin{aligned}
            \statint p_{X\mid Y}(x, z)\cdot \pi(z)\dif z
        \end{aligned}
    }
}\\
::: \exist S,T:\Prop{(\and)}{\;\;}{
    & p_{X|Y}:S\times T\to [[0, \infin))\\
    & \pi:T \to [[0, \infin))
}
\end{matrix}
$$

\<REMARK\>

Bayes估计的思想是将 $p_{X|Y}(x,y)\cdot \pi(y)$ 当作 $X,Y$ 的联合分布函数 $h_{X,Y}(x, y)$ , 并认为看过一条真实的可见数据 $x$ 后的条件分布 $h_{Y|X}(y \mid x)$ 比 $\pi(y)$ 更能代表可见数据的真实情况. 

不过到这里上述公式并没有什么理论依据, 只是根据数学直觉和一些例子提供的经验归纳出来的. 

## 两两独立观测值的Bayes估计[THM]

\<文字描述\>

对给定的先验概率函数 $\pi$ 和模型概率函数 $p_{X|Y}$, 两两独立的观测值得到的Bayes估计与顺序无关. 

\<形式描述\>

$$
p_X(x)
$$

\<REMARK\>

## 最大熵先验 [DEF]

\<形式定义\>

$$
{\rm MaxEntropyEstim}(p_{X|Y}) :: \Prop{(\and)}{\;\;}{
    & \pi := {\rm MaxEntropyEstim}(p_{X|Y})\\
    & A\times B := \dom p_{X|Y}\\
    \\
    & \pi:B \to [[0, \infin))\\
    & \statint \pi(y) \dif y=1\\
    \\
    & h(y):=\statint p_{X|Y}(x,y)\cdot \ln p_{X|Y}(x,y) \dif x\\
    \\
    & \PropEndl{
        & \forall q:B\to [[0, \infin)):
    }{\;\;}{
        & \CondBegin\\
        & \statint q(y) \dif y=1\\
        & \CondEnd\\
        & \statint -(h(y)+ \ln \pi(y)) \cdot \pi(y) \dif y \ge \statint -(h(y)+\ln q(y)) \cdot q(y) \dif y 
    }
}
$$

\<REMARK\>

最大熵先验是使得联合分布熵最大的先验函数, 由其形式易知对 $y$ 的变换不会影响它的值. 

## Bernoulli分布的最大熵先验 [THM]

\<文字描述\>

注意到最大熵先验...非常难算

\<形式描述\>

$$
\begin{matrix}
b_{X|Y}::
\Prop{(\and)}{\;\;}{
    & b_{X|Y}:\{0,1\}\times ((0,1)) \to [[0, 1]]\\
    & b_{X|Y}(1,y)=y\\
    & b_{X|Y}(0,y)=1-y\\
}\\
{\rm MaxEntropyEstim}(b_{X|Y}):\R\to [[0, \infin))\\
{\rm MaxEntropyEstim}(b_{X|Y}) = \\
\end{matrix}
$$

\<文字证明\>

此处 $b_{X|Y}$ 就是上面定义中的 $p_{X|Y}$ , 而 $h$ 函数就是 $\int b_{X|Y}(x, y) \cdot \ln b_{X|Y}(x, y)\dif x$

通过

#TODO

\<形式证明\>

$$
$$