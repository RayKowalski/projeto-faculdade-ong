const app = document.getElementById("app");

function navegar() {
    const rota = window.location.hash;

    if (rota === "#projetos") {
        app.innerHTML = `
            <section>
                <h2>Projetos da ONG</h2>
                <p>
                    Nossos projetos são voltados ao resgate, recuperação e proteção
                    de animais abandonados ou encontrados em situação de vulnerabilidade.
                </p>
            </section>

            <div class="alerta" role="alert">
                <strong>Atenção:</strong>
                as adoções passam por avaliação responsável.
            </div>

            <div class="projetos-grid">

                <section id="resgate">
                    <span class="badge">Projeto ativo</span>

                    <h2>Resgate e acolhimento</h2>
                    <p>
                        Realizamos o resgate de animais abandonados, vítimas de maus-tratos
                        ou encontrados em condições de risco, oferecendo um local seguro
                        para sua recuperação.
                    </p>
                </section>

                <section id="cuidados">
                    <span class="badge">Projeto ativo</span>

                    <h2>Recuperação e cuidados</h2>
                    <p>
                        Animais debilitados recebem alimentação, cuidados de higiene,
                        acompanhamento veterinário e o suporte necessário durante
                        seu processo de recuperação.
                    </p>
                </section>

                <section id="adocao">
                    <span class="badge">Projeto ativo</span>

                    <h2>Adoção responsável</h2>
                    <p>
                        Buscamos encontrar lares responsáveis e acolhedores para os
                        animais que estejam prontos para serem adotados, priorizando
                        seu bem-estar e segurança.
                    </p>
                </section>

                <section>
                    <span class="badge">Projeto ativo</span>

                    <h2>Voluntariado</h2>
                    <p>
                        Pessoas interessadas podem contribuir como voluntárias em atividades
                        de cuidado, alimentação, limpeza e acolhimento dos animais,
                        ajudando a proporcionar melhores condições durante sua recuperação.
                    </p>
                </section>

                <section>
                    <span class="badge">Projeto ativo</span>

                    <h2>Doações</h2>
                    <p>
                        As doações ajudam a manter os cuidados oferecidos aos animais,
                        contribuindo para despesas com alimentação, medicamentos,
                        tratamentos veterinários e materiais necessários para o abrigo.
                    </p>
                </section>

            </div>
        `;

    } else if (rota === "#contato") {
        app.innerHTML = `
            <section>
                <h2>Entre em contato</h2>

                <p>
                    Se você encontrou um animal abandonado ou precisa de orientação
                    sobre como ajudar um animal em situação de vulnerabilidade,
                    entre em contato conosco.
                </p>
            </section>

            <section>
                <h2>Informações de contato</h2>

                <p>
                    E-mail: contato@ongesparanca.org
                </p>

                <p>
                    Telefone: (11) 00000-0000
                </p>
            </section>
        `;

    } else if (rota === "#cadastro") {
        app.innerHTML = `
            <h2>Cadastre-se para ajudar</h2>

            <form>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>

                    <br><br>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>

                    <br><br>

                    <label for="nascimento">Data de nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento" required>

                    <br><br>

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" required>

                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" pattern="[0-9]{8}" maxlength="8" inputmode="numeric" required>

                    <br><br>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>

                    <br><br>

                    <label for="numero">Número:</label>
                    <input type="text" id="numero" name="numero" required>

                    <br><br>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <br><br>

                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" required>

                </fieldset>

                <fieldset>
                    <legend>Interesse em ajudar</legend>

                    <label for="ajuda">Como deseja ajudar?</label>
                    <select id="ajuda" name="ajuda" required>
                        <option value="">Selecione uma opção</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="doacao">Doação</option>
                    </select>

                    <br><br>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" pattern="[0-9]{10,11}" maxlength="11" inputmode="numeric" required>

                </fieldset>

                <br>

                <button type="submit">Enviar cadastro</button>

            </form>

            <div class="toast" role="status">
                Exemplo: cadastro concluído com sucesso!
            </div>

            <div class="modal">
                <div class="modal-conteudo">
                    <h2>Obrigado!</h2>
                    <p>
                        Agradecemos pelo seu interesse em apoiar a ONG Esperança.
                    </p>
                    <button type="button">Fechar</button>
                </div>
            </div>
        `;

        const formulario = document.querySelector("form");

        const dadosSalvos = localStorage.getItem("cadastroONG");

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);

            formulario.nome.value = dados.nome;
            formulario.email.value = dados.email;
            formulario.nascimento.value = dados.nascimento;
            formulario.cpf.value = dados.cpf;
            formulario.cep.value = dados.cep;
            formulario.endereco.value = dados.endereco;
            formulario.numero.value = dados.numero;
            formulario.cidade.value = dados.cidade;
            formulario.estado.value = dados.estado;
            formulario.ajuda.value = dados.ajuda;
            formulario.telefone.value = dados.telefone;
        }

    } else {
        app.innerHTML = `
            <section class="destaque">
                <div class="destaque-imagem">
                    <img src="../imagens/ong_animais.jpg"
                         alt="Voluntários cuidando de cães resgatados em uma ONG de proteção animal">
                </div>

                <div class="destaque-conteudo">
                    <h2>Transformando vidas</h2>
                    <p>
                        A ONG Esperança atua no resgate e na recuperação de animais
                        abandonados, vítimas de maus-tratos ou encontrados em situação
                        de vulnerabilidade.
                    </p>
                </div>
            </section>

            <section>
                <h2>Quem somos</h2>
                <p>
                    Somos uma organização dedicada à proteção animal, oferecendo
                    cuidados, alimentação, tratamento veterinário e acolhimento
                    temporário para animais que precisam de ajuda.
                </p>
            </section>
        `;
    }
}

document.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const formulario = evento.target;

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const dados = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        nascimento: formulario.nascimento.value,
        cpf: formulario.cpf.value,
        cep: formulario.cep.value,
        endereco: formulario.endereco.value,
        numero: formulario.numero.value,
        cidade: formulario.cidade.value,
        estado: formulario.estado.value,
        ajuda: formulario.ajuda.value,
        telefone: formulario.telefone.value
    };

    localStorage.setItem("cadastroONG", JSON.stringify(dados));
});

document.addEventListener("input", function (evento) {
    console.log("Campo preenchido:", evento.target.id);
});

window.addEventListener("hashchange", navegar);

const modalAcessibilidade = document.getElementById("modal-acessibilidade");
const preferenciasSalvas = localStorage.getItem("tema");
const confirmarAcessibilidade = document.getElementById("confirmar-acessibilidade");

if (preferenciasSalvas) {
    modalAcessibilidade.style.display = "none";
}

confirmarAcessibilidade.addEventListener("click", function () {
    const temaSelecionado = document.querySelector('input[name="tema"]:checked').value;

    if (temaSelecionado === "escuro") {
        document.body.classList.add("modo-escuro");
    }

    if (temaSelecionado === "claro") {
        document.body.classList.remove("modo-escuro");
    }

    const tonsQuentes = document.getElementById("tom-quente");

if (tonsQuentes.checked) {
    document.body.classList.add("modo-quente");
} else {
    document.body.classList.remove("modo-quente");
}

localStorage.setItem("tema", temaSelecionado);
localStorage.setItem("tonsQuentes", tonsQuentes.checked);

    modalAcessibilidade.style.display = "none";
});

const temaSalvo = localStorage.getItem("tema");
const tonsQuentesSalvos = localStorage.getItem("tonsQuentes");

if (temaSalvo === "escuro") {
    document.body.classList.add("modo-escuro");
}

if (temaSalvo === "claro") {
    document.body.classList.remove("modo-escuro");
}

if (tonsQuentesSalvos === "true") {
    document.body.classList.add("modo-quente");
}

navegar();