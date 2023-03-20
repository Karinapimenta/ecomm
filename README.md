# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura
Análise sobre a conformidade dessa aplicação e-comm para as recomendações dos 12 factors App

• Base de Código
Entendendo que “uma aplicação 12 fatores é sempre rastreada em um sistema de controle de versão”, foi utilizado nessa aplicação o sistema de controle de versão Git, com uma única base de código e em um único repositório. Sendo assim, a aplicação segue o padrão indicado pelo primeiro item dos doze fatores.

• Dependências
De acordo com as instruções do segundo fator, uma aplicação deve declarar todas suas dependências de maneira explícita por meio de um manifesto de declaração de dependência. Com isso em mente, é possível afirmar que a aplicação atualmente segue a recomendação através de seus arquivos “package.json” , onde são declaradas todas as dependências incluindo em que estágio elas estão sendo empregadas (dev, test, etc), isso tudo gerenciado pelo NPM do Node.js. Além disso, também foi empregado como declaração de dependência o Dockerfile, pois através das tags podemos declarar explicitamente qual versão foi utilizada para construção daquele container.

• Configuração
Para o terceiro fator temos que a configuração de uma aplicação é a separação e armazenamento de tudo o que é provável variar entre deploys. Durante a criação dos containers foram utilizadas a declaração de variáveis de ambiente e forma criados arquivos “.env” para o armazenamento de constantes de configuração.
 -> Melhorias: Não armazenar as configurações dos microsserviços em constantes.

• Serviços de Apoio
Para o quarto fator temos que um serviço de apoio é qualquer serviço que a aplicação necessite para o sucesso da sua operação, como serviços de apoio na aplicação do e_comm, temos MySQL e Mongo, e podemos afirmar que estão sendo tratados como recursos anexados como recomenda o quarto fator. Isso porque, estão sendo utilizados em containers e um container fornece um isolamento que permite que escrevamos códigos sem que influencie diretamente e podendo ser substituído a qualquer momento por outro equivalente

• Construa, lance, execute
Analisando o quinto fator, temos que, é imperativo que sejam separados os estágios de construção, lançamento e execução, pois é impossível alterar um código em tempo de execução. Porém, a aplicação e-comm está em estágio de construção aguardando os demais estágios.

• Processos
De acordo com as recomendações do sexto fator, a aplicação deve ter um ou mais processos que não armazenem estados e que não compartilhem nenhum dado, caso algum compartilhamento seja necessário, isso deve ser feito através de um serviço de apoio. Dessa maneira, podemos dizer que a aplicação respeita as instruções da sexta fator.

• Vínculo de Porta
Uma aplicação deve ser completamente autocontida, isso quer dizer, que “não depende de injeções de tempo de execução de um servidor web em um ambiente de execução para criar um serviço que defronte a web”. Portanto, a aplicação e-comm respeita essa diretriz, porque ao utilizar um container Docker é criado um vínculo de porta com o mundo exterior do container. O que também facilita para que a aplicação, propriamente dita seja um serviço de apoio para outras aplicações.

• Concorrência
Como as aplicações podem ser vistas como processos, é interessante que se divida uma aplicação em tantos processos quanto necessário.
 -> Melhorias: Podemos futuramente dividir a aplicação em domínios e criar um sistema distribuído que utiliza bibliotecas ou API Gateway para centralizar códigos referentes a autenticação e validação.

• Descartabilidade
Em consonância com o oitavo fator, o nono afirma que as aplicações devem ser enxergadas como processos, ou seja, podem ser descartadas ou pausadas a qualquer momento, substituídas por outros processos compatíveis.

• Paridade entre desenvolvimento e produção
De acordo com o décimo fator, temos a necessidade de manter o ambiente de produção e desenvolvimento o mais similar o possível. Como para essa aplicação foram usados containers cuja dependências forma explicitadas em documentos como, Docker compose, Dockerfile e package.json, é possível afirmar que a aplicação e-comm funcionará bem em ambientes diversos.

• Logs
O décimo primeiro fator descreve a importância de observabilidade de uma aplicação. A aplicação e-comm não conta com um sistema de observabilidade, ou seja, não foram implementados logs.
 -> Melhorias: A implementação de logs para garantir a visibilidade dos comportamentos dos processos em execução.

• Processos administrativos
O último fator diz que devemos rodar tarefas de administração/gestão como processos pontuais. Para a aplicação e-comm, os códigos de migração de base de dados estão disponíveis na base de códigos e utilizam a mesma configuração que os demais processos. Dessa maneira, respeitando o décimo segundo fator.

Microservices Patterns
Serviço domínio – a aplicação deve ser dividida em domínios específicos com uma responsabilidade única seguindo a padrão de DDD que deve gerar valor, dessa forma, a aplicação e-comm segue esse padrão pois está dividida em account, order, finance e products.

Serviço de negócio é a junção de diversos serviços de domínio, logo, o serviço de negócio é o responsável pelo encapsulamento dos domínios relacionados a uma regra de negócio. No caso do e-comm, o serviço de negócio realiza algumas operações que envolvem um ou mais domínios, por exemplo, uma compra.

API Gateway é padrão de serviço que pode ser externo e que fornece um único ponto de entrada para todos microsserviços, pode agregar resultados e enviá-los ao cliente. Atualmente não existe uma API Gateway no APP e-comm.
Agregador de processos tem a função de agregar dados de diferentes serviços e enviá-los ao cliente, entretanto ainda não existe um agregador de serviço.
-> Melhorias: Implementar uma API Gateway

Edge services é um gateway que personaliza para determinados usuários, respostas específicas. Atualmente a API e-comm não tem essa funcionalidade, porém pensando em como um cliente pode pedir as informações, algumas informações que são hoje retornadas se tornam irrelevantes, como ID, quantidade em estoque. Tudo isso pode ser personalizado com um Edge Service.

Banco de dados único vs Bancos diferentes – De acordo com esse padrão um serviço precisa se conectar a somente um banco de dados e esse banco de dados precisa ser acessado somente por um microsserviço. Entretanto, aplicação e-comm compartilha um único banco de dados para duas APIs, por exemplo, account e product.
Eventos assíncronos – para eventos assíncronos temos como definição que algumas operações não podem ocorrer de síncrona, dessa forma utilizamos de eventos assíncronos. Não existem eventos assíncronos no projeto e-comm.
Melhorias: implementar o Redis e a validação de pagamento de maneira assíncrona.

Agregação logs descreve a importância de observabilidade de uma aplicação de maneira agregada e padronizada. A aplicação e-comm não conta com um sistema de observabilidade, ou seja, não foram implementados logs.
 -> Melhorias: A implementação de logs para garantir a visibilidade dos comportamentos dos processos em execução, agregá-los e padronizá-los para melhor otimização.

Agregação de métricas se dá para que sejamos capazes de atestar e verificar o status de saúde da nossa aplicação. Esse atestado pode ser fornecido através de várias formas, uma delas são os logs. Como o app e-comm não possui logs, não são geradas métricas.
Melhorias: A agregação de logs de maneira organizada em um dashboard.
