const carFlags = {
  'StreetCar': [
    'streetBodywork',
    'fendersUnmodified',
    'tires200Treadwear',
    'wheelsStockWidth',
    'wheelOffsetPlusMinus7Inches',
    'wheelDiameterPlusMinus1Inch',
    'stockNumberOfWheelBoltsOrStuds',
    'shocksAtMost2Way',
    'suspensionGeometryAltered',
    'hasStandardBrakeLinesUnless1992OrOlder',
    'hasSingleAntiRollBar',
    'hasStockSprings',
    'hasStockBushings',
    'stockECUProgramming',
    'stockExhaust',
  ],
  'StreetTouringCar': [
    'streetTouringBodywork',
    'stTiresLegal',
    'tires200Treadwear',
    'wheelsStockWidth',
    'wheelOffsetPlusMinus7Inches',
    'wheelDiameterPlusMinus1Inch',
    'stockNumberOfWheelBoltsOrStuds',
    'shocksAtMost2Way',
    'suspensionGeometryAltered',
    'hasStandardBrakeLinesUnless1992OrOlder',
    'hasSingleAntiRollBar',
    'hasStockSprings',
    'hasStockBushings',
    'stockECUProgramming',
    'stockExhaust',
  ],
};

/*
 * this maps the friendly subclass names
 * to the html id tag names
 */
const subclassMap = {
  'ss': 'Super Street (SS)',
  'as': 'A Street (AS)',
  'bs': 'B Street (BS)',
  'cs': 'C Street (CS)',
  'ds': 'D Street (DS)',
  'es': 'E Street (ES)',
  'fs': 'F Street (FS)',
  'gs': 'G Street (GS)',
  'hs': 'H Street (HS)',
  'ssr': 'Super Street R (SSR)',
  'ssc': 'Solo Spec Coupe (SSC)',
  'stu': 'Street Touring Ultra (STU)',
  'str': 'Street Touring Roadster (STR)',
  'stx': 'Street Touring Xtreme (STX)',
  'sts': 'Street Touring Sport (STS)',
  'sth': 'Street Touring Hatchback (STH)',
  'camc': 'Classic American Muscle Contemporary (CAM C)',
  'camt': 'Classic American Muscle Traditional (CAM T)',
  'cams': 'Classic American Muscle Sports (CAM S)',
  'xsa': 'Xtreme Street A (XSA)',
  'xsb': 'Xtreme Street B (XSB)',
  'ssp': 'Super Street Prepared (SSP)',
  'asp': 'A Street Prepared (ASP)',
  'bsp': 'B Street Prepared (BSP)',
  'csp': 'C Street Prepared (CSP)',
  'dsp': 'D Street Prepared (DSP)',
  'esp': 'E Street Prepared (ESP)',
  'fsp': 'F Street Prepared (FSP)',
  'ssm': 'Super Street Modified (SSM)',
  'sm': 'Street Modified (SM)',
  'smf': 'Street Modified Front-Wheel-Drive (SMF)',
  'xp': 'X Prepared (XP)',
  'cp': 'C Prepared (CP)',
  'dp': 'D Prepared (DP)',
  'ep': 'E Prepared (EP)',
  'fp': 'F Prepared (FP)',
  'am': 'A Modified (AM)',
  'bm': 'B Modified (BM)',
  'cm': 'C Modified (CM)',
  'dm': 'D Modified (DM)',
  'em': 'E Modified (EM)',
  'fm': 'F Modified (FM)',
};

const allCars = {
  'Acura': {
    'NSX Alex Zanardi Signature Edition': {
      'all': ['as'],
    },
    'NSX': {
      '1990': ['bs', 'asp', 'fp'],
      '1991': ['bs', 'asp', 'fp'],
      '1992': ['bs', 'asp', 'fp'],
      '1993': ['bs', 'asp', 'fp'],
      '1994': ['bs', 'asp', 'fp'],
      '1995': ['bs', 'asp', 'fp'],
      '1996': ['bs', 'asp', 'fp'],
      '1997': ['bs', 'asp', 'fp'],
      '1998': ['bs', 'asp', 'fp'],
      '1999': ['bs', 'asp', 'fp'],
      '2000': ['bs', 'asp', 'fp'],
      '2001': ['bs', 'asp', 'fp'],
      '2002': ['bs', 'asp', 'fp'],
      '2003': ['bs', 'asp', 'fp'],
      '2004': ['bs', 'asp', 'fp'],
      '2005': ['bs', 'asp', 'fp'],
      '2016': ['ss', 'ssp'],
      '2017': ['ss', 'ssp'],
      '2018': ['ss', 'ssp'],
      '2019': ['ss', 'ssp'],
      '2020': ['ss', 'ssp'],
    },
    'Integra Type R': {
      'all': ['ds', 'stx', 'dsp', 'ep'],
    },
    'RLX': {
      'all': ['gs'],
    },
    'TLX': {
      'all': ['gs'],
    },
    'CL (all)': {
      'all': ['hs'],
    },
    'ILX': {
      '2012': ['hs'],
      '2013': ['hs', 'stx'],
      '2014': ['hs', 'stx'],
      '2015': ['hs', 'stx'],
      '2016': ['hs', 'stx'],
      '2017': ['hs', 'stx'],
      '2018': ['hs', 'stx'],
      '2019': ['hs', 'stx'],
      '2020': ['hs', 'stx'],
    },
    'Integra (all except Type R)': {
      '1986': ['hs', 'sts', 'fsp', 'ep'],
      '1987': ['hs', 'sts', 'fsp', 'ep'],
      '1988': ['hs', 'sts', 'fsp', 'ep'],
      '1989': ['hs', 'sts', 'fsp', 'ep'],
      '1990': ['hs', 'sts', 'dsp', 'ep'],
      '1991': ['hs', 'sts', 'dsp', 'ep'],
      '1992': ['hs', 'sts', 'dsp', 'ep'],
      '1993': ['hs', 'sts', 'dsp', 'ep'],
      '1994': ['hs', 'stx', 'dsp', 'ep'],
      '1995': ['hs', 'stx', 'dsp', 'ep'],
      '1996': ['hs', 'stx', 'dsp', 'ep'],
      '1997': ['hs', 'stx', 'dsp', 'ep'],
      '1998': ['hs', 'stx', 'dsp', 'ep'],
      '1999': ['hs', 'stx', 'dsp', 'ep'],
      '2000': ['hs', 'stx', 'dsp', 'ep'],
      '2001': ['hs', 'stx', 'dsp', 'ep'],
    },
    'Legend': {
      'all': ['hs', 'fsp'],
    },
    'RSX': {
      'all': ['hs', 'stx', 'dsp', 'ep'],
    },
    'TL': {
      'all': ['hs'],
    },
    'TSX': {
      'all': ['hs', 'stx', 'dsp'],
    },
    'Vigor': {
      'all': ['hs'],
    },
  },
  'Alfa Romeo': {
    '4C (incl. Spider)': {
      '2015': ['ss', 'ssr'],
      '2016': ['ss', 'ssr'],
      '2017': ['ss', 'ssr'],
      '2018': ['ss', 'ssr'],
      '2019': ['ss', 'ssr'],
      '2020': ['ss', 'ssr'],
    },
    'Giulia Quadrifoglio': {
      '2017': ['as'],
      '2018': ['as'],
      '2019': ['as'],
      '2020': ['as'],
    },
    'Giulia (incl. Ti)': {
      '2016': ['ds', 'stu'],
      '2017': ['ds', 'stu'],
      '2018': ['ds', 'stu'],
      '2019': ['ds', 'stu'],
      '2020': ['ds', 'stu'],
    },
    '2000 GTV': {
      'all': ['es', 'fsp', 'dp'],
    },
    '2000 Spider': {
      'all': ['es', 'fsp', 'dp'],
    },
    '1300': {
      'all': ['hs', 'fsp'],
    },
    '1600': {
      'all': ['hs', 'fsp', 'dp'],
    },
    '164 (non-S)': {
      '1991': ['hs'],
      '1992': ['hs'],
      '1993': ['hs'],
    },
    '1750 & 1750 GTV': {
      'all': ['hs', 'fsp', 'dp'],
    },
    '2000 (4-door sedan)': {
      'all': ['hs', 'fsp'],
    },
    'GTV V6': {
      'all': ['hs', 'dsp', 'fp'],
    },
    'Milano': {
      'all': ['hs', 'dsp'],
    },
    'Sedan (NOC)': {
      'all': ['hs'],
    },
    'Sport Sedan': {
      'all': ['dp'],
    },
    'Alfetta GT': {
      'all': ['fsp', 'dp'],
    },
    '1600 GTV': {
      'all': ['dp'],
    },
    'Giuletta Sprint & Spider (1570 cc)': {
      'all': ['dp'],
    },
    'Giulia 1300 & 1300 Ti': {
      '1964': ['dp'],
      '1965': ['dp'],
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
    },
    'GT 1300 Junior & GTA Junior': {
      '1966': ['dp'],
      '1967': ['dp'],
      '1968': ['dp'],
      '1969': ['dp'],
      '1970': ['dp'],
      '1971': ['dp'],
      '1972': ['dp'],
      '1973': ['dp'],
      '1974': ['dp'],
      '1975': ['dp'],
      '1976': ['dp'],
      '1977': ['dp'],
    },
    'GTA (bore & stroke: 78mm x 67.5mm)': {
      'all': ['dp'],
    },
    'Junior Z': {
      'all': ['dp'],
    },
    'Spider Duetto 1750 Spider Veloce (1779 cc)': {
      '1969': ['dp'],
      '1970': ['dp'],
    },
  },
  'Audi': {
    'R8 (non-GT)': {
      '2008': ['ss'],
      '2009': ['ss'],
      '2010': ['ss'],
      '2011': ['ss'],
      '2012': ['ss'],
      '2013': ['ss'],
      '2014': ['ss'],
      '2015': ['ss'],
    },
    'R8 (non-Plus)': {
      '2016': ['ss'],
      '2017': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'TT RS': {
      '2012': ['ss'],
      '2013': ['ss'],
      '2018': ['ss'],
      '2019': ['ss'],
      '2020': ['ss'],
    },
    'RS 3': {
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'RS 4': {
      '2007': ['bs'],
      '2008': ['bs'],
    },
    'RS 5': {
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
    },
    'RS 6 (C5 Chassis)': {
      '2003': ['bs'],
      '2004': ['bs'],
    },
    'S4': {
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
    'S5': {
      '2008': ['bs'],
      '2009': ['bs'],
      '2010': ['bs'],
      '2011': ['bs'],
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
    },
    'S6': {
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
    },
    'S7': {
      '2012': ['bs'],
      '2013': ['bs'],
      '2014': ['bs'],
      '2015': ['bs'],
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
    },
    'TTS': {
      '2016': ['bs'],
      '2017': ['bs'],
      '2018': ['bs'],
      '2019': ['bs'],
      '2020': ['bs'],
    },
  },
};

/**
 * populates the subclass table
 */
function populateSubclasses() {
  for (let classAcronym in subclassMap) {
    let id = classAcronym.concat("-a");
    aSelect = document.getElementById(id);
    aSelect.text = subclassMap[classAcronym];
  }
}

/**
 * populates the make, model, and year drop-down lists
 */
function lookupMakeModelYear() { // eslint-disable-line no-unused-vars

  const makeSelect = document.getElementById('make');
  const makeLength = makeSelect.options.length;
  for (i = makeLength-1; i >= 0; i--) {
    makeSelect.remove(i);
  }
  for (const make of Object.keys(allCars)) {
    const newMake = document.createElement('option');
    newMake.text = make;
    makeSelect.add(newMake);
  }
  if (sessionStorage.getItem('make') in allCars) {
    let providedMake = sessionStorage.getItem('make');
    makeSelect.value = providedMake;
  } else {
    sessionStorage.setItem('make', makeSelect.value);
  }

  const modelSelect = document.getElementById('model');
  const modelLength = modelSelect.options.length;
  for (i = modelLength-1; i >= 0; i--) {
    modelSelect.remove(i);
  }
  for (const model of Object.keys(allCars[makeSelect.value])) {
    const newModel = document.createElement('option');
    newModel.text = model;
    modelSelect.add(newModel);
  }
  if (sessionStorage.getItem('model') in allCars[makeSelect.value]) {
    let providedModel = sessionStorage.getItem('model');
    modelSelect.value = providedModel;
  } else {
    sessionStorage.setItem('model', modelSelect.value);
  }

  const yearSelect = document.getElementById('year');
  const yearLength = yearSelect.options.length;
  for (i = yearLength-1; i >= 0; i--) {
    yearSelect.remove(i);
  }
  for (var year of Object.keys(allCars[makeSelect.value][modelSelect.value])) { // eslint-disable-line no-var
    const newYear = document.createElement('option');
    if (year == 0) {
      year = 'all';
    }
    newYear.text = year;
    yearSelect.add(newYear);
  }
  if (sessionStorage.getItem('year') in allCars[makeSelect.value][modelSelect.value]) {
    let providedYear = sessionStorage.getItem('year');
    yearSelect.value = providedYear;
  } else {
    sessionStorage.setItem('year', yearSelect.value);
  }

  if (sessionStorage.getItem('make') && sessionStorage.getItem('model') && sessionStorage.getItem('year')) {
    let providedMake = sessionStorage.getItem('make');
    let providedModel = sessionStorage.getItem('model');
    let providedYear = sessionStorage.getItem('year');

    let table = document.getElementById('classesTable');
    for (var i = 0, row; row = table.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.classList.remove("highlighted");
      }
    }

    subClasses = allCars[providedMake][providedModel][providedYear];
    for (let i = 0; i < subClasses.length; i++) {
      let tableElement = document.getElementById(subClasses[i]);
      tableElement.classList.add("highlighted");
    }
  }
}

/**
 * Adds one or more session storage keys to store the answer to a question
 * The index of each array is used to match the key to the value
 * @param {Array} keyArray is an array of key names
 * @param {Array} valueArray is an array of values
 */
function setState(keyArray, valueArray) { // eslint-disable-line no-unused-vars
  for (let i = 0; i < keyArray.length; i++) {
    sessionStorage.setItem(keyArray[i], valueArray[i]);
    if (keyArray[i] != 'make' && keyArray[i] != 'model' && keyArray[i] != 'year') {
      let e = document.getElementById(keyArray[i]); // eslint-disable-line prefer-const
      e.style.display = 'none';
    }
  }
};

/**
 * clears session storage
 */
function resetState() { // eslint-disable-line no-unused-vars
  sessionStorage.clear();
}

/**
 * parses session storage to determine which questions
 * should be displayed
 * @param {string} className the name of the class being evaluated
 */

function evalSessionStorage(className) { // eslint-disable-line no-unused-vars
  let remainingQuestions = []; // eslint-disable-line prefer-const
  for (let i = 0; i < carFlags[className].length; i++) {
    if (!sessionStorage.getItem(carFlags[className][i])) {
      remainingQuestions.push(carFlags[className][i]);
    }
  }
  if (remainingQuestions.length != 0) {
    const e = document.getElementById(remainingQuestions[0]);
    e.style.display = 'block';
  } else {
    checkEligibility(className);
  }
};

/**
 * checks to see if a car is eligible for a class
 * based on the answers to the provided questions
 * @param {string} className the class the questions are being
 * checked against
 */
function checkEligibility(className) {
  let isEligible = true;
  let failedQuestions = []; // eslint-disable-line prefer-const
  for (let i=0; i<carFlags[className].length; i++) {
    if (sessionStorage.getItem(carFlags[className][i]) == 'false') {
      failedQuestions.push(carFlags[className][i]);
      isEligible = false;
    }
  }

  if (isEligible) {
    const e = document.getElementById('eligible');
    e.style.display = 'block';
    let specificClass = document.getElementById('specificClass');
    let possibleClasses = document.createTextNode(allCars[sessionStorage.getItem('make')][sessionStorage.getItem('model')][sessionStorage.getItem('year')]);
    specificClass.appendChild(possibleClasses);
  } else {
    const e = document.getElementById('notEligible');
    e.style.display = 'block';
    let questionString = '';
    for (let i=0; i<failedQuestions.length; i++) {
      const question = document.getElementById(failedQuestions[i] + 'Question');
      questionString = questionString + question.innerHTML;
      questionString = questionString + '</br>';
    }
    document.getElementById('ineligibilityQuestions').innerHTML = questionString;
  }
}
