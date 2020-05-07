//
//  ItemListView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/7/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct ItemListView: View {
    @State public var navTitle : String
    var body: some View {
        VStack {
            List {
                Section(header: Text("Shirts")) {
                    NavigationLink(destination: ItemView()) {
                        HStack {
                            Text("👕")
                            Text("American Eagle Red Shirt")
                        }
                    }
                }
            }
            .listStyle(GroupedListStyle())
        }
        .navigationBarTitle(navTitle)
    }
}

struct ItemListView_Previews: PreviewProvider {
    static var previews: some View {
        ItemListView(navTitle: "Get Fucked")
    }
}
