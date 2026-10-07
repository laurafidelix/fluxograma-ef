const curriculos = {
    "2025": {
        // --- 1º Período ---
        "Cálculo I": { "periodo": 1, "requisito": [] },
        "Física I": { "periodo": 1, "requisito": [] },
        "Geometria Analítica": { "periodo": 1, "requisito": [] },
        "Física Experimental I": { "periodo": 1, "requisito": [] },
        "Introdução à Engenharia Física": { "periodo": 1, "requisito": [] },
        "Computação Científica em Python": { "periodo": 1, "requisito": [] },
        "Matemática Preliminar": { "periodo": 1, "requisito": [] },
        "Fundamentos de Química para Engenharia I-B": { "periodo": 1, "requisito": [] },

        // --- 2º Período ---
        "Cálculo II": { "periodo": 2, "requisito": ["Cálculo I", "Geometria Analítica"] },
        "Física II": { "periodo": 2, "requisito": ["Cálculo I", "Física I"] },
        "Álgebra Linear": { "periodo": 2, "requisito": ["Geometria Analítica"] },
        "Física Experimental II": { "periodo": 2, "requisito": ["Física Experimental I", "Física I"] },
        "Química Inorgânica": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Desenho Técnico e Projeto Assistido por Computador": { "periodo": 2, "requisito": [] },
        "Química Geral Experimental": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },

        // --- 3º Período ---
        "Cálculo IV": { "periodo": 3, "requisito": ["Álgebra Linear", "Cálculo II"] },
        "Física Experimental III": { "periodo": 3, "requisito": ["Física Experimental I"] },
        "Cálculo III": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Física III": { "periodo": 3, "requisito": ["Cálculo II", "Física II"] },
        "Introdução à Ciência dos Materiais": { "periodo": 3, "requisito": [] },
        "Processos de Fabricação": { "periodo": 3, "requisito": ["Desenho Técnico e Projeto Assistido por Computador"] },
        "Química de Materiais": { "periodo": 3, "requisito": ["Química Inorgânica"] },
        "Mecânica Clássica": { "periodo": 3, "requisito": ["Cálculo II", "Física I"] },

        // --- 4º Período ---
        "Estatística": { "periodo": 4, "requisito": ["Cálculo II"] },
        "Física IV": { "periodo": 4, "requisito": ["Física III", "Cálculo III"] },
        "Física Experimental IV": { "periodo": 4, "requisito": ["Física Experimental III"] },
        "Eletromagnetismo": { "periodo": 4, "requisito": ["Física III", "Cálculo III"] },
        "Física Matemática": { "periodo": 4, "requisito": ["Cálculo IV", "Cálculo I"] },
        "Métodos Numéricos e Aplicações": { "periodo": 4, "requisito": ["Computação Científica em Python", "Cálculo II"] },
        "Circuitos Elétricos - teoria e prática": { "periodo": 4, "requisito": ["Cálculo IV"] },
        "Fenômenos de Transporte": { "periodo": 4, "requisito": ["Cálculo II", "Física II"] },

        // --- 5º Período ---
        "Introdução à Mecânica dos Sólidos": { "periodo": 5, "requisito": ["Mecânica Clássica"] },
        "Física Estatística": { "periodo": 5, "requisito": ["Cálculo III", "Física II"] },
        "Mecânica Quântica": { "periodo": 5, "requisito": ["Física Matemática", "Física IV", "Mecânica Clássica"] },
        "Métodos Computacionais da Física": { "periodo": 5, "requisito": ["Cálculo IV", "Computação Científica em Python"] },
        "Métodos Experimentais da Física I": { "periodo": 5, "requisito": ["Física II"] },
        "Seminários em Engenharia Física": { "periodo": 5, "requisito": [] },
        "Eletrônica Fundamental e Aplicada": { "periodo": 5, "requisito": ["Circuitos Elétricos - teoria e prática"] },

        // --- 6º Período ---
        "Termodinâmica de Máquinas": { "periodo": 6, "requisito": [] },
        "Física do Estado Sólido": { "periodo": 6, "requisito": ["Mecânica Quântica"] },
        "Métodos Experimentais da Física II": { "periodo": 6, "requisito": ["Introdução à Ciência dos Materiais", "Física IV"] },
        "Microprocessadores": { "periodo": 6, "requisito": ["Eletrônica Fundamental e Aplicada"] },
        "Óptica Física": { "periodo": 6, "requisito": ["Física IV", "Eletromagnetismo"] },
        "Projeto Integrado I": { "periodo": 6, "requisito": [] },
        "Técnicas de Caracterização de Materiais": { "periodo": 6, "requisito": ["Introdução à Ciência dos Materiais", "Física IV"] },

        // --- 7º Período ---
        "Tecnologias Limpas para Geração de Energia": { "periodo": 7, "requisito": [] },
        "Materiais e Dispositivos Magnéticos e Supercondutores": { "periodo": 7, "requisito": ["Eletrônica Fundamental e Aplicada", "Física do Estado Sólido"] },
        "Métodos Experimentais da Física III": { "periodo": 7, "requisito": ["Física do Estado Sólido"] },
        "Fundamentos de Controle": { "periodo": 7, "requisito": ["Métodos Computacionais da Física"] },
        "Engenharia Econômica": { "periodo": 7, "requisito": ["Estatística"] },

        // --- 8º Período ---
        "Introdução à Nanotecnologia": { "periodo": 8, "requisito": ["Química de Materiais", "Física IV"] },
        "Materiais e Dispositivos Eletrônicos": { "periodo": 8, "requisito": ["Eletrônica Fundamental e Aplicada", "Física do Estado Sólido", "Óptica Física"] },
        "Automação": { "periodo": 8, "requisito": ["Fundamentos de Controle"] },
        "Trabalho de Graduação I": { "periodo": 8, "requisito": ["Projeto Integrado I"] },

        // --- 9º Período ---
        "Psicologia Organizacional e do Trabalho": { "periodo": 9, "requisito": [] },
        "Trabalho de Graduação II": { "periodo": 9, "requisito": ["Trabalho de Graduação I"] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": ["Química Geral Experimental", "Fundamentos de Química para Engenharia I-B", "Cálculo IV", "Física III", "Cálculo I", "Estatística", "Geometria Analítica", "Álgebra Linear", "Física Experimental I", "Física Experimental III", "Física Experimental II", "Física Experimental IV", "Cálculo III", "Introdução à Ciência dos Materiais", "Química Inorgânica", "Computação Científica em Python", "Cálculo II", "Física I", "Física II", "Física IV", "Introdução à Engenharia Física", "Desenho Técnico e Projeto Assistido por Computador", "Processos de Fabricação"] }
    },
    
    "2026": {
        // --- 1º Período ---
        "Cálculo I": { "periodo": 1, "requisito": [] },
        "Física I": { "periodo": 1, "requisito": [] },
        "Geometria Analítica": { "periodo": 1, "requisito": [] },
        "Física Experimental I": { "periodo": 1, "requisito": [] },
        "Introdução à Engenharia Física": { "periodo": 1, "requisito": [] },
        "Computação Científica em Python": { "periodo": 1, "requisito": [] },
        "Matemática Preliminar": { "periodo": 1, "requisito": [] },
        "Fundamentos de Química para Engenharia I-B": { "periodo": 1, "requisito": [] },

        // --- 2º Período ---
        "Cálculo II": { "periodo": 2, "requisito": ["Cálculo I", "Geometria Analítica"] },
        "Física II": { "periodo": 2, "requisito": ["Cálculo I", "Física I"] },
        "Álgebra Linear": { "periodo": 2, "requisito": ["Geometria Analítica"] },
        "Física Experimental II": { "periodo": 2, "requisito": ["Física Experimental I", "Física I"] },
        "Química Inorgânica": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Desenho Técnico e Projeto Assistido por Computador": { "periodo": 2, "requisito": [] },
        "Química Geral Experimental": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },

        // --- 3º Período ---
        "Cálculo IV": { "periodo": 3, "requisito": ["Álgebra Linear", "Cálculo II"] },
        "Física Experimental III": { "periodo": 3, "requisito": ["Física Experimental I"] },
        "Cálculo III": { "periodo": 3, "requisito": ["Cálculo II"] },
        "Física III": { "periodo": 3, "requisito": ["Cálculo II", "Física II"] },
        "Introdução à Ciência dos Materiais": { "periodo": 3, "requisito": [] },
        "Processos de Fabricação": { "periodo": 3, "requisito": ["Desenho Técnico e Projeto Assistido por Computador"] },
        "Química de Materiais": { "periodo": 3, "requisito": ["Química Inorgânica"] },
        "Mecânica Clássica": { "periodo": 3, "requisito": ["Cálculo II", "Física I"] },

        // --- 4º Período ---
        "Estatística": { "periodo": 4, "requisito": ["Cálculo II"] },
        "Física IV": { "periodo": 4, "requisito": ["Física III", "Cálculo III"] },
        "Física Experimental IV": { "periodo": 4, "requisito": ["Física Experimental III"] },
        "Eletromagnetismo": { "periodo": 4, "requisito": ["Física III", "Cálculo III"] },
        "Física Matemática": { "periodo": 4, "requisito": ["Cálculo IV", "Cálculo I"] },
        "Métodos Numéricos e Aplicações": { "periodo": 4, "requisito": ["Computação Científica em Python", "Cálculo II"] },
        "Circuitos Elétricos - teoria e prática": { "periodo": 4, "requisito": ["Cálculo IV"] },
        "Fenômenos de Transporte": { "periodo": 4, "requisito": ["Cálculo II", "Física II"] },

        // --- 5º Período ---
        "Introdução à Mecânica dos Sólidos": { "periodo": 5, "requisito": ["Mecânica Clássica"] },
        "Física Estatística": { "periodo": 5, "requisito": ["Cálculo III", "Física II"] },
        "Mecânica Quântica": { "periodo": 5, "requisito": ["Física Matemática", "Física IV", "Mecânica Clássica"] },
        "Métodos Computacionais da Física": { "periodo": 5, "requisito": ["Cálculo IV", "Computação Científica em Python"] },
        "Métodos Experimentais da Física I": { "periodo": 5, "requisito": ["Física II"] },
        "Seminários em Engenharia Física": { "periodo": 5, "requisito": [] },
        "Eletrônica Fundamental e Aplicada": { "periodo": 5, "requisito": ["Circuitos Elétricos - teoria e prática"] },

        // --- 6º Período ---
        "Termodinâmica de Máquinas": { "periodo": 6, "requisito": [] },
        "Física do Estado Sólido": { "periodo": 6, "requisito": ["Mecânica Quântica"] },
        "Métodos Experimentais da Física II": { "periodo": 6, "requisito": ["Introdução à Ciência dos Materiais", "Física IV"] },
        "Microprocessadores": { "periodo": 6, "requisito": ["Eletrônica Fundamental e Aplicada"] },
        "Óptica Física": { "periodo": 6, "requisito": ["Física IV", "Eletromagnetismo"] },
        "Projeto Integrado I": { "periodo": 6, "requisito": [] },
        "Técnicas de Caracterização de Materiais": { "periodo": 6, "requisito": ["Introdução à Ciência dos Materiais", "Física IV"] },

        // --- 7º Período ---
        "Tecnologias Limpas para Geração de Energia": { "periodo": 7, "requisito": [] },
        "Materiais e Dispositivos Magnéticos e Supercondutores": { "periodo": 7, "requisito": ["Eletrônica Fundamental e Aplicada", "Física do Estado Sólido"] },
        "Métodos Experimentais da Física III": { "periodo": 7, "requisito": ["Física do Estado Sólido"] },
        "Fundamentos de Controle": { "periodo": 7, "requisito": ["Métodos Computacionais da Física"] },
        "Engenharia Econômica": { "periodo": 7, "requisito": ["Estatística"] },

        // --- 8º Período ---
        "Introdução à Nanotecnologia": { "periodo": 8, "requisito": ["Química de Materiais", "Física IV"] },
        "Materiais e Dispositivos Eletrônicos": { "periodo": 8, "requisito": ["Eletrônica Fundamental e Aplicada", "Física do Estado Sólido", "Óptica Física"] },
        "Automação": { "periodo": 8, "requisito": ["Fundamentos de Controle"] },
        "Trabalho de Graduação I": { "periodo": 8, "requisito": ["Projeto Integrado I"] },

        // --- 9º Período ---
        "Psicologia Organizacional e do Trabalho": { "periodo": 9, "requisito": [] },
        "Trabalho de Graduação II": { "periodo": 9, "requisito": ["Trabalho de Graduação I"] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": ["Química Geral Experimental", "Fundamentos de Química para Engenharia I-B", "Cálculo IV", "Física III", "Cálculo I", "Estatística", "Geometria Analítica", "Álgebra Linear", "Física Experimental I", "Física Experimental III", "Física Experimental II", "Física Experimental IV", "Cálculo III", "Introdução à Ciência dos Materiais", "Química Inorgânica", "Computação Científica em Python", "Cálculo II", "Física I", "Física II", "Física IV", "Introdução à Engenharia Física", "Desenho Técnico e Projeto Assistido por Computador", "Processos de Fabricação"] }
    },
    
    "2027": {
        // --- 1º Período ---
        "Geometria Vetorial": { "periodo": 1, "requisito": [] },
        "Fundamentos de Matemática": { "periodo": 1, "requisito": [] },
        "Desenho Técnico e Projeto Assistido por Computador": { "periodo": 1, "requisito": [] },
        "Introdução à Engenharia Física": { "periodo": 1, "requisito": [] },
        "Computação Científica em Python": { "periodo": 1, "requisito": [] },
        "Fundamentos de Química para Engenharia I-B": { "periodo": 1, "requisito": [] },

        // --- 2º Período ---
        "Física Newtoniana": { "periodo": 2, "requisito": [] },
        "Laboratório de Física Newtoniana": { "periodo": 2, "requisito": [] },
        "Cálculo Diferencial e Integral": { "periodo": 2, "requisito": ["Fundamentos de Matemática"] },
        "Estruturas Lineares": { "periodo": 2, "requisito": ["Geometria Vetorial"] },
        "Introdução à Ciência dos Materiais": { "periodo": 2, "requisito": [] },
        "Química Inorgânica": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },
        "Processos de Fabricação": { "periodo": 2, "requisito": ["Desenho Técnico e Projeto Assistido por Computador"] },
        "Química Geral Experimental": { "periodo": 2, "requisito": ["Fundamentos de Química para Engenharia I-B"] },

        // --- 3º Período ---
        "Estatística": { "periodo": 3, "requisito": ["Cálculo Diferencial e Integral"] },
        "Fluidos, Ondas e Termodinâmica": { "periodo": 3, "requisito": ["Cálculo Diferencial e Integral", "Física Newtoniana"] },
        "Laboratório de Fluidos, Ondas e Termodinâmica": { "periodo": 3, "requisito": ["Laboratório de Física Newtoniana", "Física Newtoniana"] },
        "Cálculo Vetorial": { "periodo": 3, "requisito": ["Cálculo Diferencial e Integral", "Estruturas Lineares"] },
        "Química de Materiais": { "periodo": 3, "requisito": ["Química Inorgânica"] },
        "Métodos Numéricos e Aplicações": { "periodo": 3, "requisito": ["Cálculo Diferencial e Integral", "Computação Científica em Python"] },

        // --- 4º Período ---
        "Equações Diferenciais": { "periodo": 4, "requisito": ["Cálculo Diferencial e Integral", "Estruturas Lineares"] },
        "Laboratório de Eletromagnetismo": { "periodo": 4, "requisito": ["Laboratório de Física Newtoniana"] },
        "Introdução ao Eletromagnetismo": { "periodo": 4, "requisito": ["Cálculo Diferencial e Integral", "Cálculo Vetorial", "Física Newtoniana"] },
        "Introdução à Mecânica dos Sólidos": { "periodo": 4, "requisito": ["Física Newtoniana"] },
        "Física Estatística": { "periodo": 4, "requisito": ["Cálculo Vetorial", "Fluidos, Ondas e Termodinâmica"] },
        "Mecânica Clássica": { "periodo": 4, "requisito": ["Cálculo Diferencial e Integral", "Física Newtoniana"] },
        "Fenômenos de Transporte": { "periodo": 4, "requisito": ["Cálculo Diferencial e Integral", "Fluidos, Ondas e Termodinâmica"] },

        // --- 5º Período ---
        "Óptica, Relatividade e Física moderna": { "periodo": 5, "requisito": ["Equações Diferenciais", "Introdução ao Eletromagnetismo"] },
        "Laboratório de Óptica e Física Moderna": { "periodo": 5, "requisito": ["Introdução ao Eletromagnetismo", "Laboratório de Eletromagnetismo"] },
        "Eletromagnetismo": { "periodo": 5, "requisito": ["Introdução ao Eletromagnetismo", "Cálculo Vetorial"] },
        "Métodos Computacionais da Física": { "periodo": 5, "requisito": ["Equações Diferenciais", "Computação Científica em Python"] },
        "Métodos Experimentais da Física I": { "periodo": 5, "requisito": ["Fluidos, Ondas e Termodinâmica"] },
        "Física Matemática": { "periodo": 5, "requisito": ["Cálculo Diferencial e Integral", "Equações Diferenciais"] },
        "Circuitos Elétricos - teoria e prática": { "periodo": 5, "requisito": ["Equações Diferenciais"] },

        // --- 6º Período ---
        "Termodinâmica de Máquinas": { "periodo": 6, "requisito": ["Física Newtoniana", "Cálculo Diferencial e Integral"] },
        "Tecnologias Limpas para Geração de Energia": { "periodo": 6, "requisito": [] },
        "Mecânica Quântica": { "periodo": 6, "requisito": ["Física Matemática", "Mecânica Clássica", "Óptica, Relatividade e Física moderna"] },
        "Métodos Experimentais da Física II": { "periodo": 6, "requisito": ["Técnicas de Caracterização de Materiais", "Introdução à Ciência dos Materiais", "Óptica, Relatividade e Física moderna"] },
        "Projeto Integrado": { "periodo": 6, "requisito": ["Processos de Fabricação"] },
        "Seminários em Engenharia Física": { "periodo": 6, "requisito": [] },
        "Técnicas de Caracterização de Materiais": { "periodo": 6, "requisito": ["Métodos Experimentais da Física II", "Introdução à Ciência dos Materiais", "Óptica, Relatividade e Física moderna"] },
        "Eletrônica Fundamental e Aplicada": { "periodo": 6, "requisito": ["Circuitos Elétricos - teoria e prática"] },

        // --- 7º Período ---
        "Física do Estado Sólido": { "periodo": 7, "requisito": ["Mecânica Quântica", "Mecânica Clássica"] },
        "Materiais e Dispositivos Magnéticos e Supercondutores": { "periodo": 7, "requisito": ["Física do Estado Sólido", "Eletrônica Fundamental e Aplicada"] },
        "Microprocessadores e Microcontroladores: Projetos e Aplicações": { "periodo": 7, "requisito": ["Eletrônica Fundamental e Aplicada"] },
        "Óptica Física": { "periodo": 7, "requisito": ["Eletromagnetismo", "Óptica, Relatividade e Física moderna"] },
        "Fundamentos de Controle": { "periodo": 7, "requisito": ["Métodos Computacionais da Física"] },

        // --- 8º Período ---
        "Introdução à Nanotecnologia": { "periodo": 8, "requisito": ["Química de Materiais", "Óptica, Relatividade e Física moderna"] },
        "Métodos Experimentais da Física III": { "periodo": 8, "requisito": ["Física do Estado Sólido", "Materiais e Dispositivos Magnéticos e Supercondutores"] },
        "Materiais e Dispositivos Eletrônicos": { "periodo": 8, "requisito": ["Eletrônica Fundamental e Aplicada", "Física do Estado Sólido", "Óptica Física"] },
        "Automação": { "periodo": 8, "requisito": ["Fundamentos de Controle"] },
        "Trabalho de Graduação I": { "periodo": 8, "requisito": ["Projeto Integrado"] },
        "Engenharia Econômica": { "periodo": 8, "requisito": ["Estatística"] },

        // --- 9º Período ---
        "Psicologia Organizacional e do Trabalho": { "periodo": 9, "requisito": [] },
        "Trabalho de Graduação II": { "periodo": 9, "requisito": ["Trabalho de Graduação I"] },

        // --- 10º Período ---
        "Estágio Supervisionado": { "periodo": 10, "requisito": [] }
    }      
};
