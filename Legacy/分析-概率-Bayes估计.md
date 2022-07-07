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
{\rm BayEstim}(p_{X|Y},x,\pi)::\Block{(\and)}{\;\;}{
    & {\rm BayEstim}(p_{X|Y},x,\pi):\dom \pi \to [[0, \infin))\\
    & {\rm BayEstim}(p_{X|Y},x,\pi)(y)=\frac{
        p_{X\mid Y}(x, y) \cdot \pi(y)
    }{
        \begin{aligned}
            \statint p_{X\mid Y}(x, z)\cdot \pi(z)\dif z
        \end{aligned}
    }
}\\
::: \exist S,T:\Block{(\and)}{\;\;}{
    & p_{X|Y}:S\times T\to [[0, \infin))\\
    & \pi:T \to [[0, \infin))
}
\end{matrix}
$$

\<REMARK\>

Bayes估计的思想是将 $p_{X|Y}(x,y)\cdot \pi(y)$ 当作 $X,Y$ 的联合分布函数 $h_{X,Y}(x, y)$ , 并认为看过一条真实的可见数据 $x$ 后的条件分布 $h_{Y|X}(y \mid x)$ 比 $\pi(y)$ 更能代表可见数据的真实情况. 

不过到这里上述公式并没有什么理论依据, 只是根据数学直觉和一些例子提供的经验归纳出来的, 直观上可以理解为 $p_{X|Y}(x|y)$ 表示参数 $y$ 的良好程度, 对良好程度更大的参数, 我们调高其在后验分布中的概率, 可以理解为一种'软'的极大似然估计. 

计算上有一个小技巧, 即 $p_{X\mid Y}(x, y) \cdot \pi(y)$ 的常数倍数部分可以不进行直接计算, 在之后进行归一化即可. 

## 多个观测值的Bayes估计 [THM]

\<文字描述\>

对给定的先验概率函数 $\pi$ 和模型概率函数 $p_{X|Y}$, 多个观测值得到的Bayes估计与顺序无关. 

\<形式描述\>

$$
\BlockEndl{
    & \forall S,T\text{<set>}\\
    & \forall p_{X|Y}: S\times T \to [[0, \infin))\\
    & \forall \pi: T \to [[0, \infin))\\
    & \forall a, b \in S\\
}{\;\;}{
    & \CondBegin\\
    & \statint p_{X|Y}(x,y) \dif x = 1\\
    & \statint \pi(y) \dif y = 1\\
    & \CondEnd\\
    & {\rm BayEstim}(p_{X|Y},a,{\rm BayEstim}(p_{X|Y},b,\pi))\\
    & = {\rm BayEstim}(p_{X|Y},b,{\rm BayEstim}(p_{X|Y},a,\pi))\\
}
$$

\<形式证明\>

$$
\BlockEndl{
    & \forall S,T\text{<set>}\\
    & \forall p_{X|Y}: S\times T \to [[0, \infin))\\
    & \forall \pi: T \to [[0, \infin))\\
    & \forall a, b \in S\\
}{\;\;}{
    & \CondBegin\\
    & \statint p_{X|Y}(x,y) \dif x = 1\\
    & \statint \pi(y) \dif y = 1\\
    & \CondEnd\\
    & {\rm BayEstim}(p_{X|Y},a,{\rm BayEstim}(p_{X|Y},b,\pi))(y)\\
    & = {\rm BayEstim}\left(p_{X|Y}, a, \frac{
        p_{X\mid Y}(b, y) \cdot \pi(y)
    }{
        \begin{aligned}
            \statint p_{X\mid Y}(b, z)\cdot \pi(z)\dif z
        \end{aligned}
    }\right)(y)\\
    & = \frac{
        p_{X|Y}(a, y) \cdot p_{X|Y}(b, y) \cdot \pi(y)
    }{\begin{aligned}
        \statint p_{X|Y}(a, z) \cdot p_{X|Y}(b, z) \cdot \pi(z) \dif z
    \end{aligned}}\\
    & = {\rm BayEstim}(p_{X|Y},b,{\rm BayEstim}(p_{X|Y},a,\pi))
}
$$

\<REMARK\>

这纯粹是一个计算层面的结果, 与两个观测值是否独立没有关系. 

## 最大熵先验 [DEF]

\<形式定义\>

$$
{\rm MaxEntropyPrior}(p_{X|Y}) :: \Block{(\and)}{\;\;}{
    & \pi := {\rm MaxEntropyPrior}(p_{X|Y})\\
    & A\times B := \dom p_{X|Y}\\
    \\
    & \pi:B \to [[0, \infin))\\
    & \statint \pi(y) \dif y=1\\
    \\
    & h(y):=\statint p_{X|Y}(x,y)\cdot \ln p_{X|Y}(x,y) \dif x\\
    \\
    & \BlockEndl{
        & \forall q:B\to [[0, \infin)):
    }{\;\;}{
        & \CondBegin\\
        & \statint q(y) \dif y=1\\
        & \CondEnd\\
        & \statint -(h(y)+ \ln \pi(y)) \cdot \pi(y) \dif y \\
        & \ge \statint -(h(y)+\ln q(y)) \cdot q(y) \dif y 
    }
}
$$

\<REMARK\>

最大熵先验是使得联合分布熵最大的先验函数, 由其形式易知对 $y$ 的变换不会影响它的值. 

然后如果稍加辨别的话会发现解最大熵先验其实是一个Monge问题, 也就是说: 基本解不出来. 

如果是离散场景或者一类特定的参数分布, 那么实际应用中可以用WGAN算法来得到近似解. 

