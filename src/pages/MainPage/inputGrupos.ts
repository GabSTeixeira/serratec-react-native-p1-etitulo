import { inputOpcoes } from "../../components/GrupoOpcoes";
import Verificado from '../../assets/images/fileverifiedIcon.png'
import Documento from '../../assets/images/fileTextIcon.png'
import Verificar from '../../assets/images/fileTicket.png'



export const Grupos: inputOpcoes[] = [
    {
        tituloGrupo: 'Certidões',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Verificado, 
                titulo: 'Quitação eleitoral',
                desc: 'Emita sua certidão de quitação eleitoral.'
            },
            {
                id: '2', 
                imagem: Verificado, 
                titulo: 'Nada consta criminal eleitoral',
                desc: 'Emita sua certidão de nada consta criminal eleitoral.'
            },
            {
                id: '3', 
                imagem: Verificado, 
                titulo: 'Declaração de trabalho eleitoral',
                desc: 'Emita a declaração de trabalho eleitoral'
            }
        ]
    },
    {
        tituloGrupo: 'Justificativa',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Documento, 
                titulo: 'Justificativa de ausência',
                desc: 'Faça seu pedido de justificative de ausência online.'
            },
            {
                id: '2', 
                imagem: Documento, 
                titulo: 'Justificativa presencial',
                desc: 'Consulte endereços para justificar sua ausência presencialmente.'
            }
        ]
    },
    {
        tituloGrupo: 'Outras opções',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Verificado, 
                titulo: 'Imprimir título eleitoral',
                desc: 'Realize a impressão do seu título eleitoral.'
            },
            {
                id: '2', 
                imagem: Verificar, 
                titulo: 'Débitos eleitorais',
                desc: 'Consulte e emite guia para pagamentos de débitos eleitorais.'
            },
            {
                id: '3',
                imagem: Documento,
                titulo: 'Autenticidade de documentos',
                desc: 'veja se a certidão ou o documento são autênticos.'
            }
        ]
    },
    {
        tituloGrupo: 'Outras opções',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Verificado, 
                titulo: 'Imprimir título eleitoral',
                desc: 'Realize a impressão do seu título eleitoral.'
            },
            {
                id: '2', 
                imagem: Verificar, 
                titulo: 'Débitos eleitorais',
                desc: 'Consulte e emite guia para pagamentos de débitos eleitorais.'
            },
            {
                id: '3',
                imagem: Documento,
                titulo: 'Autenticidade de documentos',
                desc: 'veja se a certidão ou o documento são autênticos.'
            }
        ]
    },
    {
        tituloGrupo: 'Outras opções',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Verificado, 
                titulo: 'Imprimir título eleitoral',
                desc: 'Realize a impressão do seu título eleitoral.'
            },
            {
                id: '2', 
                imagem: Verificar, 
                titulo: 'Débitos eleitorais',
                desc: 'Consulte e emite guia para pagamentos de débitos eleitorais.'
            },
            {
                id: '3',
                imagem: Documento,
                titulo: 'Autenticidade de documentos',
                desc: 'veja se a certidão ou o documento são autênticos.'
            }
        ]
    },
    {
        tituloGrupo: 'Outras opções',
        arrayOpcoes: [
            {
                id: '1', 
                imagem: Verificado, 
                titulo: 'Imprimir título eleitoral',
                desc: 'Realize a impressão do seu título eleitoral.'
            },
            {
                id: '2', 
                imagem: Verificar, 
                titulo: 'Débitos eleitorais',
                desc: 'Consulte e emite guia para pagamentos de débitos eleitorais.'
            },
            {
                id: '3',
                imagem: Documento,
                titulo: 'Autenticidade de documentos',
                desc: 'veja se a certidão ou o documento são autênticos.'
            }
        ]
    }
]