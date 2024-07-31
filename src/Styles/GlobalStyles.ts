import { StyleSheet } from "react-native";

// Definindo as cores
export const colors = {
    primary: '#3498DB',        // Azul Claro (botões principais, destaques)
    secondary: '#2C3E50',      // Azul Marinho (botões secundários)
    background: '#E6F7FF',     // Azul Muito Claro (fundo)
    textPrimary: '#1a2733',    // Azul Marinho (texto principal)
    textSecondary: '#3498DB',  // Azul Claro (texto secundário)
    divider: '#BDBDBD',        // Cinza Claro (divisórias)
    accent: '#3498DB',         // Azul Claro (destaques)
    error: '#F44336',          // Vermelho (mensagens de erro)
    success: '#4CAF50',        // Verde (mensagens de sucesso)
    link: '#3498DB',           // Azul Claro (links)
    iconActive: '#3498DB',     // Cor para ícones ativos
    iconInactive: '#757575',    // Cor para ícones inativos
    contorno:'#000033',        // cor de contorno do texto

};

// Definindo os estilos globais
export const GlobalStyles = StyleSheet.create({

    // Estilos para o corpo da página
    body: {
        backgroundColor: colors.background,  // Cor de fundo do corpo
        fontFamily: 'Arial, sans-serif',     // Fonte padrão
        fontSize: 24,                        // Tamanho da fonte
        lineHeight: 24,                      // Altura da linha
        margin: 0,                           // Margem
        padding: 0,                          // Espaçamento interno
        fontWeight: 'bold',                  // Peso da fonte

    },

    // Estilos para containers principais
    container: {
        flex: 1,                             // Flexível para preencher o espaço
        alignItems: 'stretch',               // Alinhamento dos itens
        maxWidth: 1200,                      // Largura máxima
        margin: 0,                           // Margem
        padding: 15,                         // Espaçamento interno
        shadowOpacity: 0.25,                 // Opacidade da sombra
        shadowRadius: 3.84,                  // Raio da sombra
        borderRadius: 5,                     // Raio da borda
    },

    // Estilos para títulos principais
    title: {
        fontSize: 26,                        // Tamanho da fonte
        textAlign: 'center',                 // Alinhamento do texto
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        marginVertical: 15,                  // Margem vertical
        marginBottom: 10,                    // Margem inferior para espaçamento da base
        marginTop: 15,                       // Margem superior para espaçamento do topo
    },

    // Estilos para subtítulos
    subtitle: {
        fontSize: 20,                        // Tamanho da fonte
        textAlign: 'center',
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        fontFamily: 'Arial, sans-serif',     // Fonte
        marginHorizontal: 15,                // Margem vertical
        marginTop: 10,                       // Margem superior para espaçamento do topo

    },

    // Estilos para texto regular
    text: {
        fontSize: 16,                    // Tamanho da fonte
        textAlign: 'justify',
        marginHorizontal: 20,            // Margem horizontal para espaçamento dos lados
        lineHeight: 22,                  // Altura da linha
        color: colors.textPrimary,       // Cor do texto
        marginBottom: 15,                    // Margem inferior para espaçamento da base

    },

    // Estilos para botões principais
    buttonPrimary: {
        backgroundColor: colors.primary,     // Cor de fundo do botão
        color: colors.textPrimary,           // Cor do texto do botão
        marginVertical: 20,                  // Margem vertical
        paddingVertical: 20,                 // Espaçamento vertical interno
        paddingHorizontal: 16,               // Espaçamento horizontal interno
        borderRadius: 16,                    // Raio da borda
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
        justifyContent: 'flex-start',         // Alinha o conteúdo no centro horizontalmente
        height: 65,                          // Altura total do botão
        width: '70%',                        // Largura total do botão
        alignSelf: 'center',                 // Centraliza o botão horizontalmente

    },

    // Estilos para botões secundários
    buttonSecondary: {
        backgroundColor: colors.secondary,   // Cor de fundo do botão
        color: '#FFFFFF',                    // Cor do texto do botão (mantida como branca para contraste)
        paddingVertical: 15,                 // Espaçamento vertical interno
        paddingHorizontal: 20,               // Espaçamento horizontal interno
        borderRadius: 15,                    // Raio da borda
        cursor: 'pointer',                   // Cursor do mouse
        borderWidth: 1,                      // Largura da borda
        borderColor: colors.secondary,       // Cor da borda
        flexDirection: 'row',                // Direção dos itens (imagem e texto)
        alignItems: 'center',                // Alinhamento vertical dos itens
    },

    // Estilos para texto dentro dos botões principais
    buttonTextPrimary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 22,                        // Tamanho da fonte
        marginLeft: 20,                      // Espaçamento à esquerda da imagem
        lineHeight: 26,                      // Altura da linha do texto
        textShadowColor: colors.contorno,   // Cor da sombra
        textShadowOffset: { width: 2, height: 1.5 }, // Offset da sombra
        textShadowRadius: 2,                 // Raio da sombra

    },

    // Estilos para texto dentro dos botões secundários
    buttonTextSecondary: {
        color: '#FFFFFF',                    // Cor do texto
        fontWeight: 'bold',                  // Peso da fonte
        fontSize: 18,                        // Tamanho da fonte
        marginLeft: 20,                      // Espaçamento à esquerda da imagem
    },

    // Estilos para ícones médios
    iconMedium: {
        fontSize: 24,                        // Tamanho do ícone
        color: colors.iconInactive,          // Cor inicial para ícones inativos
    },

    // Estilos para ícones médios ativos
    iconMediumActive: {
        color: colors.iconActive,            // Cor para ícones ativos
    },

    // Estilos para imagem
    ImagePremium: {
        width: 33,                           // Largura da imagem
        height: 33,                          // Altura da imagem
        marginTop: 5,                   // Margem superior para espaçamento do topo


    },

    // Novo estilo para A imagem ficar na frente da fraze
    premiumContainer: {
        flexDirection: 'row',   // Direção dos itens na linha
        marginLeft: 30,
        marginRight: 40,
        marginBottom: 20,
    },
    // Estilos para legenda
    legend: {
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
        color: colors.textPrimary,
    },

});

export default GlobalStyles;
