---
TimeLine: 
=> 20220513--0000000 : 章节已创建
---
| #未完成-正文 | #未完成-习题 |
| ------------ | ------------ |


# § pi集和lambda集

## ::IMPORT



## pi集的定义 [DEF]

\<形式定义\>

$$
\pialg(X) := \Block{(\and)}{\;\;}{
    & X\text{<set>} \\
    & \bigcup_{A \in X}A \in X\\
    & \forall A,B \in X: A \cap B \in X\\
}
$$

## lambda集的定义 [DEF]

\<形式定义\>

$$
\lambdaalg(X) := \Block{(\and)}{\;\;}{
    & X\text{<set>}\\
    \\
    & \bigcup_{A \in X}A \in X\\
    \\
    & \forall A, B\in X: A \sube B \Rightarrow B \diagdown A \in X\\
    \\
    & \BlockEndl{
        & \forall A: [1 .. ] \to X
    }{\;\;}{
        & \CondBegin\\
        & A_{(n)} \sube A_{(n+1)} \\
        & \CondEnd\\
        & \bigcup_{n \in [1 .. ]} A_{(n)} \in X
    } 
}
$$

## lambda扩张 [DEF]

\<形式定义\>

$$
\begin{matrix}
\lambdaex(X) := \Block{(\and)}{\;\;}{
    & \lambdaalg(\lambdaex(X)) \and \lambdaex(X) \supe X\\
    & \forall {\cal L}\supe X:\lambdaalg({\cal L})\Rarrow{\cal L}\supe \lambdaex(X)
}\\
:::X\suffix\set
\end{matrix}
$$

## pi-lambda定理 [THM]

\<形式描述\>

$$
\forall \pialg(X):\lambdaex(X)=\sigmaex(X)
$$

\<形式证明\>

$$
\BlockEndl{
    & \forall \pialg(X)
}{\;\;}{
    & \CondEnd\\
    & \sigmaex(X) \supe \lambdaex(X)\\
    \\
    & {\cal G}_{(A)} := \{B: A \cap B \in \lambdaex(X)\}\\
    \\
    & \BlockEndl{
        & \forall A \in \lambdaex(X)\\
    }{\;\;}{
        & \CondEnd\\
        & \BlockEndl{
            & \forall B,C \in {\cal G}_{(A)}
        }{\;\;}{
            & \CondBegin\\
            & C \supe B\\
            & \CondEnd\\
            & (A\cap C) \diagdown (A \cap B) \in {\lambdaex}(X) \\
            & C \diagdown B \in {\cal G}_{(A)}\\
        }\\\\
        & \BlockEndl{
            & \forall B:[1 .. ] \to {\cal G}_{(A)}\\
        }{\;\;}{
            & \CondBegin\\
            & B_{(n)} \sube B_{(n+1)}\\
            & \CondEnd\\
            & A \cap B_{(n)} \sube A \cap  B_{(n+1)}\\
            & (\bigcup_{n \in [1 ..]} B_{(n)}) \cap A = \bigcup_{n \in [1 ..]} (B_{(n)} \cap A)\in 
            \lambdaex(X)\\
            & \bigcup_{n \in [1 ..]} B_{(n)} \in {\cal G}_{(A)}
        }\\\\
        & \lambdaalg({\cal G}_{(A)})\\
    }\\\\
    & \forall A \in X: {\cal G}_{(A)} \supe X\\
    & \forall A \in X: {\cal G}_{(A)} \supe \lambdaex(X)\\
    & \forall A \in X: \forall B \in \lambdaex(X): A \cap B\in \lambdaex(X)\\
    \\
    & \forall A \in \lambdaex(X): \forall B \in X: A \cap B\in \lambdaex(X)\\
    & \forall A \in \lambdaex(X): {\cal G}_{(A)} \supe X\\
    & \forall A \in \lambdaex(X): {\cal G}_{(A)} \supe \lambdaex(X)\\
    & \forall A, B \in \lambdaex(X): A \cap B\in \lambdaex(X)\\
    \\
    & \lambdaex(X) = \sigmaex(X)\\
}
$$

## ::EXPORT

| ENTRY                                                                       | TYPE | SYMBOL   |
| --------------------------------------------------------------------------- | ---- | -------- |
| [pi集的定义](分析-测度-pi集和lambda集.md#pi集的定义%20DEF) | DEF  | $\pialg$      |
| [lambda集的定义](分析-测度-pi集和lambda集.md#lambda集的定义%20DEF)                            | DEF  | $\lambdaalg$  |
| [lambda扩张](分析-测度-pi集和lambda集.md#lambda扩张%20DEF)                      | DEF  | $\lambdaex$ |
| [pi-lambda定理](分析-测度-pi集和lambda集.md#pi-lambda定理%20THM)                      | THM  | --- |

