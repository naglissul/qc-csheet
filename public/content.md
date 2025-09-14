# Quantum Computing cheatsheet

## Quantum Catch-up course

2025-09-05 from UvA course lecture notes (with additions from Naglis memory on reading articles)

**Postulates**
1. $\ket{\psi(t)} \in \mathcal H, \lVert \ket{\psi(t)} \rVert = 1$
2. $\ket{\psi(t_1)} = U(t_0, t_1)\ket{\psi(t_0)}$
3. $\text{Pr}[\lambda_i] = \bra\psi P_i \ket\psi$ and $\ket\psi \rightarrow \frac{P_i\ket\psi}{\sqrt{\text{Pr}[\lambda_i]}}$
4. $\ket\psi \otimes \ket\phi \in \mathcal H \otimes \mathcal K$ 

**Math, notations**

- Hermitian $U^\dag = \bar U^T$, $U^*$
- Inner product $\langle\psi|\psi\rangle = \lVert \ket\psi \rVert ^2$
- Hermitian op $A$ s.t. $A^\dag = A$
- Unitary op $U$ s.t. $U^\dag U = UU^\dag = I$,
- Qubit pure state $\ket\psi \in \mathbb C^2$ s.t. $\langle\psi|\psi\rangle = 1$
- Dirac notation of unitary, dyadic decomposition $U=\sum_i\ket{w_i}\bra{v_i}$
- Spectral decomposition (case of dyadic) $A = \sum_i\lambda_iP_i$
- $\braket A_\psi = \langle\psi|A|\psi\rangle = \sum_i\lambda_i\langle\psi|P_i|\psi\rangle$
- Product state $\ket\psi = \ket{\phi_1} \otimes \ket{\phi_2}$
- Entangled state $\nexists \phi_1, \phi_2: \ket\psi = \ket{\phi_1} \otimes \ket{\phi_2}$
- Projector $A \in L(V)$ s.t. $A^2 = A$
- Kr&ouml;necker $\delta_{ij} =
\begin{cases}
1 & \text{if } i = j \\
0 & \text{if } i \neq j
\end{cases}
$
- Commutator $[A, B]$, commutes $=0$
- Anticommutator $[A, B]_+$, anticommutes $=0$

## Quantum Soar (YT) +Nielsen and Chuang

2024-09-10
    
### Basics: 
        
$\ket{0} =  \begin{bmatrix} 1 \\ 0 \end{bmatrix}$,
$\ket{1} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$,
$\ket{\pm} = \frac{1}{\sqrt2}(\ket{0} \pm \ket{1})$,
$iY = ZX$

### Phase kickback   
        
\begin{quantikz}
    \lstick{$\ket{\psi}$} & \ctrl{1} & \qw \rstick{$\ket{\psi_{\theta}}$} \\
    \lstick{$\ket{v}$} & \gate{U} & \qw \rstick{$\ket{v}$} \\
\end{quantikz}


$U\ket{v} = e^{i\theta} \ket{v}$

$\psi$ is in superposition

### Superdense coding

$\ket{\Phi^+} = \text{CNOT} \, ( H \otimes I ) \ket{0} \otimes \ket{0} = \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} )$, encodes 00

$\ket{\Phi^-} = \hspace{2cm} (Z \otimes I) \ket{\Phi^+} = \frac{1}{\sqrt{2}} ( \ket{00} - \ket{11} )$, encodes 01

$\ket{\Psi^+} = \hspace{1.9cm} (X \otimes I) \ket{\Phi^+} = \frac{1}{\sqrt{2}} ( \ket{01} + \ket{10} )$, encodes 10

$\ket{\Psi^-} = \hspace{1.8cm} (iY \otimes I)\ket{\Phi^+} = \frac{1}{\sqrt{2}} ( \ket{01} - \ket{10} )$, encodes 11
        
### Oracles
        
            \begin{minipage}{5cm}
                \begin{quantikz}
                    \lstick{$\ket{x}$} & \ctrl{1} & \qw \rstick{$\ket{x}$} \\
                    \lstick{$\ket{y}$} & \gate{U_f} & \qw \rstick{$\ket{y \oplus f(x)}$}
                \end{quantikz}
            \end{minipage}
            \begin{minipage}{5cm}
                \begin{quantikz}
                    \lstick{$\ket{x}$} & \ctrl{1} & \qw \rstick{$\ket{x}$} \\
                    \lstick{$\ket{0}$} & \gate{U_f} & \qw \rstick{$\ket{f(x)}$}
                \end{quantikz}
            \end{minipage}
            \begin{minipage}{5cm}
                \begin{quantikz}
                    \lstick{$\ket{x}$} & \ctrl{1} & \qw \rstick{$(-1)^{f(x)}\ket{x}$} \\
                    \lstick{$\ket{-}$} & \gate{U_f} & \qw \rstick{$\ket{-}$}
                \end{quantikz}
            \end{minipage}
        
### Deutsch's algorithm

### Deutsch-Jozsa algorithm
        
$\displaystyle H^{\otimes n} \ket{0}^{\otimes n} = \frac{1}{\sqrt{2^n}} \sum_{x \in \{0, 1\}^n} \ket{x}$

$\displaystyle H^{\otimes n} \ket{x} = \frac{1}{\sqrt{2^n}} \sum_{z \in \{0, 1\}^n} (-1)^{x \cdot z}\ket{z}$

## Two

$$
|\psi\rangle = e^{i\gamma}(\cos \frac \theta 2 |0\rangle + e^{i \varphi} \sin \frac \theta 2 |1\rangle)
$$

## NOT

$X|0\rangle = |1\rangle$

$X|1\rangle = |0\rangle$

## ?

$Y|0\rangle = e^{\frac \pi 2 i}|1\rangle = i|1\rangle$

$Y|1\rangle = e^{-\frac \pi 2 i}|0\rangle = -i|0\rangle$

## Phase

$P(\varphi)$ or $R_z(\theta)$

For which

$P(\varphi)|0\rangle = |0\rangle$

$P(\varphi)|1\rangle = e^{\varphi i}|1\rangle$

And then

$P(\pi) = Z$

$P(\frac \pi 2) = S$

$P(\frac \pi 4) = T$

$R_Z(\frac{3\pi}{2}) = S^\dagger$

$R_Y(\frac\pi2) = Y$

$R_Y(\frac\pi4) = \sqrt Y$

$R_Y(\frac{7\pi}{4}) = \sqrt Y ^\dagger$

### ALSO

$Z_1Z_2 = Z \otimes Z$

# Expvalues and ep. 4 of qiskit stuff

## Inner product

Similar to dot product, just with complex numbers stuff...

$\langle\psi|\psi\rangle$ = 1

$\langle 0|1\rangle = 0$

In case of $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$:

$\langle 0|\psi\rangle = \alpha$

## Dyadic form of gate:

$G = \sum_i \lambda_i|\phi_i\rangle\langle\phi_i|$

Ex:

$Z|0\rangle = |0\rangle$ and $Z|1\rangle = -|1\rangle$,

$\therefore Z = |0\rangle\langle0|-|1\rangle\langle1|$

## Density matrix

Pure or mixed state...

$\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$

Ex:

Mixed state of $|0\rangle$ with 50% probability and $|1\rangle$ with 50% probability.

$\rho = \frac12 |0\rangle\langle0| + \frac12 |1\rangle\langle0| = \frac12 \begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix} $

## Expval

Probabilistic:

$\langle \hat O \rangle = \sum_i \lambda_i P(\lambda_i)$, where $P(\lambda_i)$ means calculating probability of measuring the eigenvector of $\hat O$ (which has eigenvalue $\lambda_i$) in the state $|\psi\rangle$.

Matrix:

$\langle \hat O \rangle = \langle\psi|\hat O |\psi\rangle$

## Hamiltonian

Hamiltonian $H$ describes TIME EVOLUTION of a system. Writing in unitary operator, describing evolution over $t$ BASICALLY PARAMETERIZED QUANTUM CIRCUIT:

$U(t) = e^{-iHt}$

And this can be approximated using q-gates.

### Hamiltonian decomposition

e.g.: $H = Z_1Z_2 + X_1$

then $H_1=Z_1Z_2$ and $H_2=X_1$

### Trotter-Suzuki approximation

e.g.: $e^{=iHt} = e^{-iZ_1Z_2t}e^{-iX_1t}$

### Trotter term implementation

One qubit ($X$):

$$
R_x(2t)|\psi\rangle
$$

Two qubit diagonal needs entanglement ($Z_1Z_2$):

$$
CZ\;(R_2(-2t) \otimes I)\;CZ\;(|q_1\rangle \otimes |q_2\rangle)
$$

### Ising Hamiltonian

describes a system of interacting spins in a magnetic field:

$$H = \sum_{i<j} J_{ij}Z_iZ_j + \sum_i h_iX_i$$

$[H_1, H_2] \neq 0$, i.e. $H_1$ and $H_2$ don't commute. Therefore we need Trotter-Suzuki (?).

# Hydrogen VQE paper

# Extra for qiskit

## Measuring on _sth_ basis.

Applying observable operator and measuring and getting a certain operators eigenstate with probability of that eigenstate eigenvalue (ofc, abs squared).

**$Z$ basis (eigenstates): $\ket0$ and $\ket1$**

Because $Z\ket0 = \ket0$ and $Z\ket1 = -\ket1$

**$X$ basis (eigenstates): $\ket+ = \frac{\ket0 + \ket1}{\sqrt2}$ and $\ket- = \frac{\ket0 - \ket1}{\sqrt2}$**

Because $X\ket+ = \ket+$ and $X\ket- = -\ket-$

**$Y$ basis (eigenstates): $\ket{+i} = \frac{\ket0 +i\ket1}{\sqrt2}$ and $\ket{-i} = \frac{\ket0 -i\ket1}{\sqrt2}$**

> Reminder: $Y\ket0 = i\ket1$ and $Y\ket1 = -i\ket0$

Because $Y\ket{+i} = \ket{+i}$ and $Y\ket{-i} = -\ket{-i}$

So we basically whenever measuring a quantum state, we have to specify on what basis we are measuring. On what operator/matrix eigenvectors' basis. We can have a state $\ket\psi$ and express it as a linear combination of eigenvalues and eigenvectors (of specified operator/matrix/observable).

$$
\ket\psi \\
= \alpha_1\ket0 + \beta_1\ket1 \text{ this is on Z basis} \\
= \alpha_2\ket+ + \beta_2\ket- \text{ this is on X basis}\\
= \alpha_3\ket{+i} + \beta_3\ket{-i} \text{ this is on Y basis}
$$

For example:

$$
\ket{\Psi^-} \\
= \frac{1}{\sqrt2}\ket{00} - \frac{1}{\sqrt2}\ket{11} \text{  on ZZ basis}\\
= \frac{1}{\sqrt2}\ket{+i,+i} + \frac{1}{\sqrt2}\ket{-i,-i} = \frac{1}{\sqrt2}(\frac{1}{\sqrt2}\ket{00}+\frac{i}{\sqrt2}\ket{10}+\frac{i}{\sqrt2}\ket{01}-\frac{1}{\sqrt2}\ket{11}) + \frac{1}{\sqrt2}(\frac{1}{\sqrt2}\ket{00}-\frac{i}{\sqrt2}\ket{10}-\frac{i}{\sqrt2}\ket{01}-\frac{1}{\sqrt2}\ket{11}) \text{  on YY basis}\\
= \frac{1}{\sqrt2}\ket{+-} + \frac{1}{\sqrt2}\ket{-+} = \frac{1}{\sqrt2}(\frac{1}{\sqrt2}\ket{00}+\frac{1}{\sqrt2}\ket{10}-\frac{1}{\sqrt2}\ket{01}-\frac{1}{\sqrt2}\ket{11}) + \frac{1}{\sqrt2}(\frac{1}{\sqrt2}\ket{00}-\frac{1}{\sqrt2}\ket{10}+\frac{1}{\sqrt2}\ket{01}-\frac{1}{\sqrt2}\ket{11}) \text{  on XX basis}
$$

# Trying to set the thesis scope
