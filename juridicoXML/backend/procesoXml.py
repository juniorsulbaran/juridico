import xml.etree.ElementTree as ET

def parse_xml(file):
    tree = ET.parse(file) 
    root = tree.getroot() 
    data = [] 
    metaData = []
    index = 1 # Inicializamos el índice
    for item in root.findall('documentMetadata'):
        #cargamos las variable de de los metadatos
        year = item.attrib.get('year') 
        expeditionDate = item.attrib.get('expeditionDate') 
        publishDate = item.attrib.get('publishDate') 
        isParsed = item.attrib.get('isParsed')
        idType = item.attrib.get('idType')
        idEntidadEmisora = item.attrib.get('idEntidadEmisora')
        idCountry = item.attrib.get('idCountry')
        idDepartment = item.attrib.get('idDepartment')
        idCity = item.attrib.get('idCity')
        name = item.attrib.get('name')
        description = item.attrib.get('description')
        code = item.attrib.get('code')
        documentId = item.attrib.get('documentId')
        docNumber = item.attrib.get('docNumber')
        docExtendedNumber = item.attrib.get('docExtendedNumber')
        senateNumber = item.attrib.get('senateNumber')

        # Aquí puedes crear una estructura de datos que contenga la información de interés 
        format_unit = { 
            'tag': 'documentMetadata', 
            'year': year, 
            'expeditionDate':expeditionDate,
            'publishDate':publishDate,
            'isParsed':isParsed,
            'idtype':idType,
            'idEntidadEmisora':idEntidadEmisora,
            'idCountry':idCountry,
            'idDepartament':idDepartment,
            'idCity':idCity,
            'name':name,
            'description':description,
            'code':code,
            'documentId':documentId,
            'docnumber':docNumber,
            'docExtendedNumber':docExtendedNumber,
            'senateNumber':senateNumber 
        }
        metaData.append(format_unit) 

    #listo los Parrafos
    for item in root.findall('.//formatUnit'): 
        format_unit = { 
            'index': index,
            'tag': 'formatUnit', 
            'text': item.text, 
        } 
        data.append(format_unit) 
        index += 1 # Incrementamos el índice para el siguiente elemento print(data) return data
    
    parrafo = []

    # Este valor data[24]['text'], data[37]['text'] viene None y genera error 
    parrafo = {
        'data':data,
        'metaData':metaData,
        'encabezado':data[0]['text'],
        'parrafo1':data[1]['text'],
        'parrafo2':data[2]['text'] + data[3]['text'] + data[4]['text'] + data[5]['text'] + data[6]['text'],
        'parrafo3':data[7]['text'],
        'parrafo4':data[8]['text'] + data[9]['text']+ data[10]['text']+ data[11]['text'] + data[12]['text']+data[13]['text'],
        'parrafo5':data[14]['text'],
        'parrafo6':data[15]['text'],
        'parrafo7':data[16]['text'],
        'parrafo8':data[17]['text'],
        'parrafo9':data[18]['text'],
        'parrafo10':data[19]['text'],
        'parrafo11':data[20]['text'],
        'parrafo12':data[21]['text'] + data[22]['text'] + data[23]['text'] + data[25]['text'],
        'parrafo13':data[26]['text'], 
        'parrafo14':data[27]['text'] + data[28]['text'] + data[29]['text'] + data[30]['text']
        + data[31]['text'],
        'parrafo15':data[32]['text'],
        'parrafo16':data[33]['text']+ data[34]['text'] + data[35]['text'] + data[36]['text'] + data[38]['text'],
        'parrafo17':data[39]['text']+ data[40]['text'] + data[41]['text'] + data[43]['text'],
        'parrafo18':data[44]['text'],
        'parrafo19':data[45]['text'],
        'parrafo20': data[47]['text']+data[48]['text'],
        'parrafo21':data[50]['text'],
        'parrafo22':data[52]['text'] + data[54]['text']  + data[55]['text'],
        'parrafo23':data[56]['text'] + data[57]['text'],
        'parrafo24': data[58]['text'] + data[59]['text'] 


        
    }

    return parrafo 