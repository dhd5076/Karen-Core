//
//  SearchView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/4/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct SearchView: View {
    
    @State private var query: String = ""
    
    var body: some View {
        NavigationView {
            VStack {
                SearchBar(text: .constant(""))
                Spacer()
            }
            .navigationBarTitle(Text("Search"));
        }
    }
}

struct SearchView_Previews: PreviewProvider {
    static var previews: some View {
        SearchView()
    }
}
