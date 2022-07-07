---
TimeLine: 
=> 20220606--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |

# 符号测度

## 符号测度的定义 [DEF]

\<形式定义\>

$$
\begin{matrix}
\sgnmsr(\mu) :=
\Block{(\and)}{\;\;}{
    & \exist {\cal S}: \mu: {\cal S} \to ((-\infin, \infin]]\\
    \\
    & {\cal S} := \dom \mu\\
    \\
    & \sigmaalg({\cal S})\\
    \\
    & \BlockEndl{
        & \forall {\cal A} \sube {\cal S}: 
    }{\;\;}{
        & \CondBegin\\
        & \card {\cal A} \preceq \aleph(\varnothing)\\
        & \forall A, B\in {\cal A}: 
        \Block{(\or)}{\;\;}{
            & A \cap B = \varnothing\\ 
            & A = B
        }\\
        & \CondEnd\\
        & \mu \,\left(\bigcup_{A\in {\cal A}} A\right) 
            = \sum_{A \in {\cal A}} \mu(A) 
    }
}
\end{matrix}
$$

## 负集的存在性 [THM]

\<文字描述\>

一个任意可测子集的测度都是负数的集合被称为负集. 任意测度为负数的集合当中都含有负集. 

\<形式描述\>

$$
\BlockEndl{
    & \forall \sgnmsr(\mu)\\
    & \forall A \in \dom \mu\and \mu(A) < 0\\
    & \exist N \in \dom \mu \cap \Pow(A)\\
}{\;\;}{
    & \CondEnd\\
    & \mu(N) \le \mu(A) < 0\\
    & \forall B \in \dom \mu \cap \Pow(N): \mu(B) \le 0
}
$$

\<文字证明\>

穷举一列'正'部分的集合并从所构造的集合中减去, 并验证减去的部分能构成原集合可测子集测度的上界. 

然后根据测度的性质, 最后剩下的部分不能是负无穷. 

\<形式证明\>

$$
\BlockEndl{
    \forall &\sgnmsr(\mu)\\
    \forall &A \in \dom \mu \and \mu(A) \le 0\\
    \# & X : [1 ..] \to \dom \mu\\
}{\;\;}{
    & \CondBegin\\
    & X_{(1)} = \varnothing\\
    & N_{(n)} := A \diagdown \bigcup_{t \in [1 .. n]} X_{(t)}\\
    & T_{(n)} := \sup_{@ \R}\{\mu(B): B \sube N_{(n)}\and B \in \dom \mu \}\\
    & \mu(X_{(n+1)}) \ge \min_{@ \R} \left\{1, \frac{T_{(n)}}{2}\right\}\\
    & \CondEnd\\
    & N_{\infin}:= A \diagdown \bigcup_{t \in [1 .. ]} X_{(t)}\\
    & \mu(N_\infin) \le \mu(A) - \sum_{n=1}^\infin \mu(X_{(n)}) \le \mu(A)\\
    \\
    & \BlockEndl{
        & \forall B \in \Pow(N_{\infin}) \cap \dom \mu:\\
    }{\;\;}{
        & \CondEnd\\
        & \forall n \in [1 ..]: T_{(n)} \ge \mu(B)\\
        & \bigg(\mu(B)>0\bigg) \Rightarrow \left(\mu(N_\infin)=\mu(A) - \sum_{n=1}^\infin \mu(X_{(n)})=-\infin\right)\\
        & \mu(B) \le 0
    }\\
}
$$

## Hahn分解 [DEF]

\<形式定义\>

$$
\begin{matrix}
\text{hahn-decompose}(\mu)(P, N) := \Block{(\and)}{\;\;}{
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & P \cup N = \Omega \and P \cap N = \varnothing\\
    & \forall A \in \Pow(P) \cap \dom \mu: \mu(A) \ge 0\\
    & \forall A \in \Pow(N) \cap \dom \mu: \mu(A) \le 0\\
}\\
:::\mu \suffix \sgnmsr
\end{matrix}
$$

## Hahn分解定理 [THM]

\<文字描述\>

对任意一个有符号测度, Hahn分解存在且在至多差一个零测集的意义下唯一. 

\<形式描述\>

$$
\forall \sgnmsr(\mu): \exist P,N:\text{hahn-decompose}(\mu)(P,N)
$$
\<文字证明\>

对任一符号测度 $\mu: {\cal A} \to ((-\infin, \infin]]$ . 设其 ${\cal A}$ 的全集是 $\Omega$ . 

注意到负的集合总不是无穷的, 因此利用证明负集存在性相似的穷举方法, 将负的部分全部举出, 余下的集合任意子集都是正的, 否则能找到并集使得其测度是 $-\infin$ . 

\<形式证明\>

$$
\BlockEndl{
    & \forall \sgnmsr(\mu):\\
    & \# N:[1 .. n] \to \dom \mu:\\
    & \# T:[1 .. n] \to ((-\infin, \infin]]:\\
}{\;\;}{
    & \CondBegin\\
    & \Omega := \bigcup_{A \in \dom \mu} A\\
    & P_{(n)} := \Omega \diagdown \bigcup_{j \in [1 .. n-1]}N_{(j)}\\
    \\
    & N_{(1)} = \varnothing\\
    & T_{(n)} = \inf_{@ \R}\left\{\mu(B) : B \in \dom \mu \cap \Pow(P_{(n)})\right\}\\
    & \mu(N_{(n)}) \le \max\left\{-1,\frac{T_{(n)}}{2}\right\}\\
    & \forall A \in \dom \mu \cap \Pow(N_{(n)}): \mu(A) \le 0\\
    & \CondEnd\\
    \\
    & N_{\infin} := \bigcup_{n \in [1 .. ]} N_{(n)}\\
    & \forall A \in \dom \mu \cap \Pow(N_\infin): \mu(A)=\sum_{n=1}^\infin \mu(A\cap N_{(n)})\le0\\
    \\
    & P_{\infin} := \Omega \diagdown N_{\infin}\\
    & \BlockEndl{
        & \forall A \in \dom \mu \cap \Pow(P_\infin)\\
    }{\;\;}{
        & \CondEnd\\
        & \forall n\in [1 ..]: \mu(A)\ge T_{(n)}\\
        & \bigg(\mu(A) < 0\bigg) \Rarrow \bigg(\mu(N_{\infin})=\sum_{n=1}^\infin \mu(N_{(n)})=-\infin\bigg)\\
        & \mu(A)\ge 0
    }\\\\
    & \text{hahn-decompose}(\mu)(P_\infin , N_\infin)
}
$$
