function confirmar() {
    const cursos = document.getElementById('cursos').value;

    if (cursos !== '') {
        cursos.textContent = cursos;
        document.getElementById('confirmacao').style.display = 'block';
    }
}

function mostrarCurso() {
    const cursos = document.getElementById('cursos').value;
    let descricao = '';

    switch (cursos) {
        case 'ads':
            descricao = "O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação.";
            break;
        case 'eletronica':
            descricao = "O tecnólogo em Eletrônica Automotiva participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva, entre outras atividades.";
            break;
        case 'fabricacao':
            descricao = "O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos.";
            break;
        case 'gestao':
            descricao = "O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos.";
            break;
        case 'qualidade':
            descricao = "O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade.";
            break;
        case 'manufatura':
            descricao = "Atua como um integrador de tecnologia. Além de projetar e desenvolver projetos de manufatura, o profissional é responsável por agregar novas tecnologias voltadas para a Indústria 4.0.";
            break;
        case 'logistica':
            descricao = "O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte.";
            break;
        case 'metalurgicos':
            descricao = "O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície.";
            break;
        case 'polimeros':
            descricao = "Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo.";
            break;
        case 'projetos':
            descricao = "O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas.";
            break;
        case 'biomedicos':
            descricao = "O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares.";
            break;
        default:
            descricao = '';
    }

    if (descricao !== '') {
        const novaJanela = window.open('', '_blank', 'width=600,height=300');
        novaJanela.document.write('<html><head><title>Descrição do Curso</title><link rel="stylesheet" type="text/css" href="style.css"></head><body>');
        novaJanela.document.write(descricao);
        novaJanela.document.write('</body></html>');
        document.getElementById('confirmacao').style.display = 'none';
    }

}

function cancelar() {
    document.getElementById('confirmacao').style.display = 'none';
}